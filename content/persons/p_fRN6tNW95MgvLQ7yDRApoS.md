---
schema: wang-person/v1
id: p_fRN6tNW95MgvLQ7yDRApoS
status: active
merged_into: null
display_name: 王振侯
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8uabbHWZdf52pxSQZSMJGb
        subject_person_id: p_fRN6tNW95MgvLQ7yDRApoS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振侯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JVKPgKn5tHry34dsj8MpkP
          claim_id: c_8uabbHWZdf52pxSQZSMJGb
          source_id: s_ZYzyfoCdZxzTYpKCipaCDc
          stance: supports
          locator: CBDB:696201
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（696201）
          source: &a1
            id: s_ZYzyfoCdZxzTYpKCipaCDc
            source_type: api_record
            title: 中国历代人物传记资料库：王振侯（CBDB 696201）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696201&o=json
            external_identifier: CBDB:696201
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.546Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_R9Eh3eGesJ9SW3RmCZCAL6
        subject_person_id: p_fRN6tNW95MgvLQ7yDRApoS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王振侯，清人物。籍贯仙居，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 696201）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZOnnlQFTOa8U_glpu4_vKH
          claim_id: c_R9Eh3eGesJ9SW3RmCZCAL6
          source_id: s_ZYzyfoCdZxzTYpKCipaCDc
          stance: supports
          locator: CBDB:696201
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_yQOUqtSgDxJ0F6-5f--GtT
        subject_person_id: p_fRN6tNW95MgvLQ7yDRApoS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pNAV6nKLPRpaVTa4tHS3kC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3i86qqeAO4NugHsBPvnonK
          claim_id: c_yQOUqtSgDxJ0F6-5f--GtT
          source_id: s_ZYzyfoCdZxzTYpKCipaCDc
          stance: supports
          locator: 仙居志，lgid=356644：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_pNAV6nKLPRpaVTa4tHS3kC
        status: active
        display_name: 王維鶴
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王振侯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王振侯 | accepted |
| bio.summary | 王振侯，清人物。籍贯仙居，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 696201） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_pNAV6nKLPRpaVTa4tHS3kC | 王維鶴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王振侯（CBDB 696201）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696201&o=json)
