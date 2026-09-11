---
schema: wang-person/v1
id: p_FLURKBk3xeprKVpRPTEzkd
status: active
merged_into: null
display_name: 王緜泰
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UVn5k5Dr8S4MSDP21wJTco
        subject_person_id: p_FLURKBk3xeprKVpRPTEzkd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緜泰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7KESmDSQcJq9hKX8iG5DDM
          claim_id: c_UVn5k5Dr8S4MSDP21wJTco
          source_id: s_aTG1523xWms7tBouLJaGPg
          stance: supports
          locator: CBDB:551384
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（551384）
          source: &a1
            id: s_aTG1523xWms7tBouLJaGPg
            source_type: api_record
            title: 中国历代人物传记资料库：王緜泰（CBDB 551384）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551384&o=json
            external_identifier: CBDB:551384
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.508Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_x2HoCVnHkyV71EQxFaUZzA
        subject_person_id: p_FLURKBk3xeprKVpRPTEzkd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緜泰，清人物。籍贯婺源，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 551384）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hZdtUCz_j-Mch_iPx6cNMZ
          claim_id: c_x2HoCVnHkyV71EQxFaUZzA
          source_id: s_aTG1523xWms7tBouLJaGPg
          stance: supports
          locator: CBDB:551384
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_O58c_Jodrl4IAFErvpJCsO
        subject_person_id: p_RuQhs8uJ9fucx5As4cNei9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FLURKBk3xeprKVpRPTEzkd
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f1bokSV8wJ54BRJG0btH9I
          claim_id: c_O58c_Jodrl4IAFErvpJCsO
          source_id: s_aTG1523xWms7tBouLJaGPg
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160561：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RuQhs8uJ9fucx5As4cNei9
        status: active
        display_name: 王作霖
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王緜泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王緜泰 | accepted |
| bio.summary | 王緜泰，清人物。籍贯婺源，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 551384） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_RuQhs8uJ9fucx5As4cNei9 | 王作霖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王緜泰（CBDB 551384）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551384&o=json)
