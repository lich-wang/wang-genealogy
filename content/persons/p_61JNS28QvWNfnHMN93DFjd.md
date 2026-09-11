---
schema: wang-person/v1
id: p_61JNS28QvWNfnHMN93DFjd
status: active
merged_into: null
display_name: 王毓麟
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GjU3mT4M4ziP4kb1gsbT2j
        subject_person_id: p_61JNS28QvWNfnHMN93DFjd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王毓麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6F55vz6oB1xmsv3DL2fug5
          claim_id: c_GjU3mT4M4ziP4kb1gsbT2j
          source_id: s_2wK9PQAmDW98FtfX9yAE7L
          stance: supports
          locator: CBDB:703139
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（703139）
          source: &a1
            id: s_2wK9PQAmDW98FtfX9yAE7L
            source_type: api_record
            title: 中国历代人物传记资料库：王毓麟（CBDB 703139）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703139&o=json
            external_identifier: CBDB:703139
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.824Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QQwVgD85Hn3S7mZZmEHaQd
        subject_person_id: p_61JNS28QvWNfnHMN93DFjd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王毓麟，清人物。籍贯上虞，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 703139）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1bGI2puPSl1UPk-l10ynlu
          claim_id: c_QQwVgD85Hn3S7mZZmEHaQd
          source_id: s_2wK9PQAmDW98FtfX9yAE7L
          stance: supports
          locator: CBDB:703139
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_t5HhD-BYEgPWZgF4zp8HmV
        subject_person_id: p_DVCr6jBgLiL3jTMuxyZfR5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_61JNS28QvWNfnHMN93DFjd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K_DH43sQEqmguT3_naGCd1
          claim_id: c_t5HhD-BYEgPWZgF4zp8HmV
          source_id: s_2wK9PQAmDW98FtfX9yAE7L
          stance: supports
          locator: 上虞縣志，lgid=324917：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DVCr6jBgLiL3jTMuxyZfR5
        status: active
        display_name: 王世功
        merged_into_person_id: null
  children:
    - claim:
        id: c_NNl-tAfLpV7uiRU8zRHq-C
        subject_person_id: p_61JNS28QvWNfnHMN93DFjd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C6hRPeByiiyGTFCEf9Tocw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6A3QnOvOLXp1MVG569cTgv
          claim_id: c_NNl-tAfLpV7uiRU8zRHq-C
          source_id: s_2wK9PQAmDW98FtfX9yAE7L
          stance: supports
          locator: 上虞縣志，lgid=324918：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_C6hRPeByiiyGTFCEf9Tocw
        status: active
        display_name: 王舍
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王毓麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王毓麟 | accepted |
| bio.summary | 王毓麟，清人物。籍贯上虞，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 703139） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DVCr6jBgLiL3jTMuxyZfR5 | 王世功 | accepted |
| children | p_C6hRPeByiiyGTFCEf9Tocw | 王舍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王毓麟（CBDB 703139）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703139&o=json)
