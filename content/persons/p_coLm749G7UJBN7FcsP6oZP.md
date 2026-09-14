---
schema: wang-person/v1
id: p_coLm749G7UJBN7FcsP6oZP
status: active
merged_into: null
display_name: 王櫓
cbdb_id: 250841
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_k3ofxg8Xvq4YJo6XWHbKh8
        subject_person_id: p_coLm749G7UJBN7FcsP6oZP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王櫓，明人物。成化十四年進士，籍贯虹縣。（中国历代人物传记资料库 CBDB 250841）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_fqP0bNTtEbihebxVmYe46R
          claim_id: c_k3ofxg8Xvq4YJo6XWHbKh8
          source_id: s_wKk1DHEAFSo5KTDGTLahZA
          stance: supports
          locator: CBDB:250841
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_wKk1DHEAFSo5KTDGTLahZA
            source_type: api_record
            title: 中国历代人物传记资料库：王櫓（CBDB 250841）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250841&o=json
            external_identifier: CBDB:250841
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_vDfG4NM7r9bVetPkpd2P72
        subject_person_id: p_coLm749G7UJBN7FcsP6oZP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王櫓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CHPGn7ANkYFHfZ27XBNsTR
          claim_id: c_vDfG4NM7r9bVetPkpd2P72
          source_id: s_wKk1DHEAFSo5KTDGTLahZA
          stance: supports
          locator: CBDB:250841
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NXXWHtrDnPvRb83oUFse6d
        subject_person_id: p_EMHJfmp35NiNjZCUBv8fjK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_coLm749G7UJBN7FcsP6oZP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m8ZpZgb3UV5s-Mg54QmrfM
          claim_id: c_NXXWHtrDnPvRb83oUFse6d
          source_id: s_xpI93JIolj8HGBGCJyZUDX
          stance: supports
          locator: CBDB：兄弟 王楫（199876）之父／母 王斌
          quotation: null
          interpretation_note: 由兄弟关系推断：王櫓 与 王楫 为同胞（CBDB 记「兄」），王楫 之父／母即 王櫓 之父／母。
          source:
            id: s_xpI93JIolj8HGBGCJyZUDX
            source_type: api_record
            title: 中国历代人物传记资料库：王櫓（CBDB 250841）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250841&o=json
            external_identifier: CBDB:250841
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EMHJfmp35NiNjZCUBv8fjK
        status: active
        display_name: 王斌
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_d2Iem7lQrH4anFb5YJC8PN
        subject_person_id: p_6qn5pH8ZsdNHGV4KR7haUQ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_coLm749G7UJBN7FcsP6oZP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ght7_KTrnwa49sNcS4uRSu
          claim_id: c_d2Iem7lQrH4anFb5YJC8PN
          source_id: s_xpI93JIolj8HGBGCJyZUDX
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199876 王楫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xpI93JIolj8HGBGCJyZUDX
            source_type: api_record
            title: 中国历代人物传记资料库：王櫓（CBDB 250841）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250841&o=json
            external_identifier: CBDB:250841
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6qn5pH8ZsdNHGV4KR7haUQ
        status: active
        display_name: 王楫
        merged_into_person_id: null
---

# 王櫓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王櫓，明人物。成化十四年進士，籍贯虹縣。（中国历代人物传记资料库 CBDB 250841） | accepted |
| name.primary | 王櫓 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EMHJfmp35NiNjZCUBv8fjK | 王斌 | accepted |
| other | p_6qn5pH8ZsdNHGV4KR7haUQ | 王楫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王櫓（CBDB 250841）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250841&o=json)
