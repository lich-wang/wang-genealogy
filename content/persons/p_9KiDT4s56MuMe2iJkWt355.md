---
schema: wang-person/v1
id: p_9KiDT4s56MuMe2iJkWt355
status: active
merged_into: null
display_name: 王珉
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_38L2Tu6ocMjfPsNuKsrsgQ
        subject_person_id: p_9KiDT4s56MuMe2iJkWt355
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7vvJ2JJN1aQdTGQDsMDt8A
          claim_id: c_38L2Tu6ocMjfPsNuKsrsgQ
          source_id: s_HH8pFC9f5TJvWeWR5T7cUh
          stance: supports
          locator: CBDB:313151
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（313151）
          source: &a1
            id: s_HH8pFC9f5TJvWeWR5T7cUh
            source_type: api_record
            title: 中国历代人物传记资料库：王珉（CBDB 313151）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313151&o=json
            external_identifier: CBDB:313151
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.899Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kjbWCu2GDC18uceH7RqXH3
        subject_person_id: p_9KiDT4s56MuMe2iJkWt355
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珉，明人物。天順四年進士，籍贯修武。（中国历代人物传记资料库 CBDB 313151）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5n-ab5LuEIwguNSjdlUw4j
          claim_id: c_kjbWCu2GDC18uceH7RqXH3
          source_id: s_HH8pFC9f5TJvWeWR5T7cUh
          stance: supports
          locator: CBDB:313151
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_PmASgIKhfkdG8DptqaQiM5
        subject_person_id: p_SFZ4bgpN7HUNWVTQwjnX9y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9KiDT4s56MuMe2iJkWt355
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XPa2YWQkUVYb-Td_q5y-hG
          claim_id: c_PmASgIKhfkdG8DptqaQiM5
          source_id: s_1Zh8M614yd5vW_3ZLOfv5C
          stance: supports
          locator: CBDB：兄弟 王璠（198758）之父／母 王懋
          quotation: null
          interpretation_note: 由兄弟关系推断：王珉 与 王璠 为同胞（CBDB 记「兄」），王璠 之父／母即 王珉 之父／母。
          source:
            id: s_1Zh8M614yd5vW_3ZLOfv5C
            source_type: api_record
            title: 中国历代人物传记资料库：王珉（CBDB 313151）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313151&o=json
            external_identifier: CBDB:313151
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SFZ4bgpN7HUNWVTQwjnX9y
        status: active
        display_name: 王懋
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_BvMyaDsg96zJZ6ozoRyUWE
        subject_person_id: p_9KiDT4s56MuMe2iJkWt355
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aeWEfBiaXEc8NBAjLdxyDe
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ft0OktQIFxcifuUTwlE7fQ
          claim_id: c_BvMyaDsg96zJZ6ozoRyUWE
          source_id: s_1Zh8M614yd5vW_3ZLOfv5C
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198758 王璠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1Zh8M614yd5vW_3ZLOfv5C
            source_type: api_record
            title: 中国历代人物传记资料库：王珉（CBDB 313151）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313151&o=json
            external_identifier: CBDB:313151
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aeWEfBiaXEc8NBAjLdxyDe
        status: active
        display_name: 王璠
        merged_into_person_id: null
---

# 王珉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珉 | accepted |
| bio.summary | 王珉，明人物。天順四年進士，籍贯修武。（中国历代人物传记资料库 CBDB 313151） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SFZ4bgpN7HUNWVTQwjnX9y | 王懋 | accepted |
| other | p_aeWEfBiaXEc8NBAjLdxyDe | 王璠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珉（CBDB 313151）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313151&o=json)
