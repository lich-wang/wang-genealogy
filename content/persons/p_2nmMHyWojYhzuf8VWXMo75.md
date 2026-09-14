---
schema: wang-person/v1
id: p_2nmMHyWojYhzuf8VWXMo75
status: active
merged_into: null
display_name: 王琨
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_h5eKwzu2voxkfCPib3WKFx
        subject_person_id: p_2nmMHyWojYhzuf8VWXMo75
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QXNCkeRa1avvPYpRnY5B1Q
          claim_id: c_h5eKwzu2voxkfCPib3WKFx
          source_id: s_4n8g243QJQLaDJWdZ8jnGj
          stance: supports
          locator: CBDB:294336
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294336）
          source: &a1
            id: s_4n8g243QJQLaDJWdZ8jnGj
            source_type: api_record
            title: 中国历代人物传记资料库：王琨（CBDB 294336）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294336&o=json
            external_identifier: CBDB:294336
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.450Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qHtwT7JQGFNXbCCGa6SpYp
        subject_person_id: p_2nmMHyWojYhzuf8VWXMo75
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琨，明人物。嘉靖十一年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 294336）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CYmCV82h5PwzaZLdt1lnv2
          claim_id: c_qHtwT7JQGFNXbCCGa6SpYp
          source_id: s_4n8g243QJQLaDJWdZ8jnGj
          stance: supports
          locator: CBDB:294336
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LUun7yFgv38Fk2QSWVOZS5
        subject_person_id: p_Akvhk7vb2JMfzgR2hpBTHy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2nmMHyWojYhzuf8VWXMo75
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BuRivyBIhUgfG1m3VWuxAX
          claim_id: c_LUun7yFgv38Fk2QSWVOZS5
          source_id: s_v-_QQLo9yft8_JIBAU7Tit
          stance: supports
          locator: CBDB：兄弟 王瑛（126750）之父／母 王浦
          quotation: null
          interpretation_note: 由兄弟关系推断：王琨 与 王瑛 为同胞（CBDB 记「兄」），王瑛 之父／母即 王琨 之父／母。
          source:
            id: s_v-_QQLo9yft8_JIBAU7Tit
            source_type: api_record
            title: 中国历代人物传记资料库：王琨（CBDB 294336）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294336&o=json
            external_identifier: CBDB:294336
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Akvhk7vb2JMfzgR2hpBTHy
        status: active
        display_name: 王浦
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_EuKNm3Q2d0BaF5YnJES8nR
        subject_person_id: p_2nmMHyWojYhzuf8VWXMo75
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_AKiZ73AHqEtzATAkDq6m9S
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cG38Nj4J86PkmZtKAslvpm
          claim_id: c_EuKNm3Q2d0BaF5YnJES8nR
          source_id: s_v-_QQLo9yft8_JIBAU7Tit
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126750 王瑛）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_v-_QQLo9yft8_JIBAU7Tit
            source_type: api_record
            title: 中国历代人物传记资料库：王琨（CBDB 294336）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294336&o=json
            external_identifier: CBDB:294336
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AKiZ73AHqEtzATAkDq6m9S
        status: active
        display_name: 王瑛
        merged_into_person_id: null
---

# 王琨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琨 | accepted |
| bio.summary | 王琨，明人物。嘉靖十一年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 294336） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Akvhk7vb2JMfzgR2hpBTHy | 王浦 | accepted |
| other | p_AKiZ73AHqEtzATAkDq6m9S | 王瑛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琨（CBDB 294336）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294336&o=json)
