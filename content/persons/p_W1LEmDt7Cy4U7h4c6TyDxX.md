---
schema: wang-person/v1
id: p_W1LEmDt7Cy4U7h4c6TyDxX
status: active
merged_into: null
display_name: 王渥
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jiQ4pF49JSmpdbsaWL9z3y
        subject_person_id: p_W1LEmDt7Cy4U7h4c6TyDxX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王渥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MvV61N4sKytjh1hZJQsmne
          claim_id: c_jiQ4pF49JSmpdbsaWL9z3y
          source_id: s_DbeBuCiz6a6rHLhoyirBjJ
          stance: supports
          locator: CBDB:30482
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（30482）
          source: &a1
            id: s_DbeBuCiz6a6rHLhoyirBjJ
            source_type: api_record
            title: 中国历代人物传记资料库：王渥（CBDB 30482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30482&o=json
            external_identifier: CBDB:30482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.033Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fgggzySsoY86Sa2E9gQUSs
        subject_person_id: p_W1LEmDt7Cy4U7h4c6TyDxX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王渥，宋人物。籍贯石埭，曾任朝請郎、大理寺少卿。（中国历代人物传记资料库 CBDB 30482）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fpuDTdlXV2FCl9R5Urjncq
          claim_id: c_fgggzySsoY86Sa2E9gQUSs
          source_id: s_DbeBuCiz6a6rHLhoyirBjJ
          stance: supports
          locator: CBDB:30482
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_xXHvRlhLypi_mZkbBw9yp8
        subject_person_id: p_zGcbQEDDUm5Y71RMcWUTgh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_W1LEmDt7Cy4U7h4c6TyDxX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8vXjYYb3HC9KlNndAJJwNj
          claim_id: c_xXHvRlhLypi_mZkbBw9yp8
          source_id: s_C1K32TwMvaQGRxNxd2mXRS
          stance: supports
          locator: CBDB 亲属：父（KinPerson 22083）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_C1K32TwMvaQGRxNxd2mXRS
            source_type: api_record
            title: 中国历代人物传记资料库：王渥（CBDB 30482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30482&o=json
            external_identifier: CBDB:30482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zGcbQEDDUm5Y71RMcWUTgh
        status: active
        display_name: 王鎡
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王渥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王渥 | accepted |
| bio.summary | 王渥，宋人物。籍贯石埭，曾任朝請郎、大理寺少卿。（中国历代人物传记资料库 CBDB 30482） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zGcbQEDDUm5Y71RMcWUTgh | 王鎡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王渥（CBDB 30482）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30482&o=json)
