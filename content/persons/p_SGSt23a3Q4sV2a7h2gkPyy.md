---
schema: wang-person/v1
id: p_SGSt23a3Q4sV2a7h2gkPyy
status: active
merged_into: null
display_name: 王熙
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eNtZU6tGQqZgCJGa4kPocn
        subject_person_id: p_SGSt23a3Q4sV2a7h2gkPyy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王熙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hCphgKFW1dwck6sTy6N28m
          claim_id: c_eNtZU6tGQqZgCJGa4kPocn
          source_id: s_2BkfdVeJ9FMiJ51BifyA47
          stance: supports
          locator: CBDB:309656
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（309656）
          source: &a1
            id: s_2BkfdVeJ9FMiJ51BifyA47
            source_type: api_record
            title: 中国历代人物传记资料库：王熙（CBDB 309656）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309656&o=json
            external_identifier: CBDB:309656
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.826Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vLFGNdybQ9A6GDK6tkBfsF
        subject_person_id: p_SGSt23a3Q4sV2a7h2gkPyy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王熙，明人物。嘉靖二十六年進士，籍贯金壇，入仕監生。（中国历代人物传记资料库 CBDB 309656）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RD7FToIsKr3-UWj5vopKqL
          claim_id: c_vLFGNdybQ9A6GDK6tkBfsF
          source_id: s_2BkfdVeJ9FMiJ51BifyA47
          stance: supports
          locator: CBDB:309656
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_eo4LdEzOBZUZbEY9bMfHWb
        subject_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SGSt23a3Q4sV2a7h2gkPyy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_My2C-qfjUOC7EWyHMNMD3d
          claim_id: c_eo4LdEzOBZUZbEY9bMfHWb
          source_id: s_1N2e65JkSDej9J3FtFEs8f
          stance: supports
          locator: CBDB：兄弟 王樵（34720）之父／母 王臬
          quotation: null
          interpretation_note: 由兄弟关系推断：王熙 与 王樵 为同胞（CBDB 记「弟」），王樵 之父／母即 王熙 之父／母。
          source:
            id: s_1N2e65JkSDej9J3FtFEs8f
            source_type: api_record
            title: 中国历代人物传记资料库：王熙（CBDB 309656）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309656&o=json
            external_identifier: CBDB:309656
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vpzDXBrQjqPJnEN64LCsPF
        status: active
        display_name: 王臬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_jt_3hRkTK85H3Tem8COBAY
        subject_person_id: p_923xZ5qSMZFGgS46h7nLWU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_SGSt23a3Q4sV2a7h2gkPyy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E1FhwjAy3T0t99EHPn56j5
          claim_id: c_jt_3hRkTK85H3Tem8COBAY
          source_id: s_1N2e65JkSDej9J3FtFEs8f
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 34720 王樵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1N2e65JkSDej9J3FtFEs8f
            source_type: api_record
            title: 中国历代人物传记资料库：王熙（CBDB 309656）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309656&o=json
            external_identifier: CBDB:309656
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_923xZ5qSMZFGgS46h7nLWU
        status: active
        display_name: 王樵
        merged_into_person_id: null
---

# 王熙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王熙 | accepted |
| bio.summary | 王熙，明人物。嘉靖二十六年進士，籍贯金壇，入仕監生。（中国历代人物传记资料库 CBDB 309656） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vpzDXBrQjqPJnEN64LCsPF | 王臬 | accepted |
| other | p_923xZ5qSMZFGgS46h7nLWU | 王樵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王熙（CBDB 309656）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309656&o=json)
