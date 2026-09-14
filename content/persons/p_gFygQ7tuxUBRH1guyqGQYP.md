---
schema: wang-person/v1
id: p_gFygQ7tuxUBRH1guyqGQYP
status: active
merged_into: null
display_name: 王澈
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8KRUBNR6o5JSx6vTqeV2dG
        subject_person_id: p_gFygQ7tuxUBRH1guyqGQYP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bjJQDBtbcGa7KG5uZmCafF
          claim_id: c_8KRUBNR6o5JSx6vTqeV2dG
          source_id: s_x897G6bbUTk1KAL3VE7sHQ
          stance: supports
          locator: CBDB:328614
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（328614）
          source: &a1
            id: s_x897G6bbUTk1KAL3VE7sHQ
            source_type: api_record
            title: 中国历代人物传记资料库：王澈（CBDB 328614）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328614&o=json
            external_identifier: CBDB:328614
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.302Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UdADK1RbQz3cU3ktUhsrS4
        subject_person_id: p_gFygQ7tuxUBRH1guyqGQYP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澈，明人物。嘉靖四十一年進士，籍贯永嘉，曾任布政使司左參議、朝議大夫。（中国历代人物传记资料库 CBDB 328614）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eUMzC5czuTh-kfVgw1WrJM
          claim_id: c_UdADK1RbQz3cU3ktUhsrS4
          source_id: s_x897G6bbUTk1KAL3VE7sHQ
          stance: supports
          locator: CBDB:328614
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_HXW4kC4aeHeQ0wTlUqwvZB
        subject_person_id: p_gFygQ7tuxUBRH1guyqGQYP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2q5oLPYeHNC3ozo65nG5VF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5RESG4AazOp-6uNh6FA8tO
          claim_id: c_HXW4kC4aeHeQ0wTlUqwvZB
          source_id: s_5FoRMCCjYq81yzD5zvd1kZ
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百三十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5FoRMCCjYq81yzD5zvd1kZ
            source_type: api_record
            title: 中国历代人物传记资料库：王叔杲（CBDB 126579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126579&o=json
            external_identifier: CBDB:126579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.038Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2q5oLPYeHNC3ozo65nG5VF
        status: active
        display_name: 王叔杲
        merged_into_person_id: null
    - claim:
        id: c_DZ26mBL7bLcPDF6KfodQbg
        subject_person_id: p_gFygQ7tuxUBRH1guyqGQYP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HvrFGZd9ssdoXZvL77JxCH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jSSQ3pTduz9C17lHRG3JBa
          claim_id: c_DZ26mBL7bLcPDF6KfodQbg
          source_id: s_W5L9791aZMz7UBjKQaAsjr
          stance: supports
          locator: CBDB：兄弟 王叔杲（126579）之父／母 王澈
          quotation: null
          interpretation_note: 由兄弟关系推断：王叔果 与 王叔杲 为同胞（CBDB 记「弟」），王叔杲 之父／母即 王叔果 之父／母。
          source:
            id: s_W5L9791aZMz7UBjKQaAsjr
            source_type: api_record
            title: 中国历代人物传记资料库：王叔果（CBDB 328621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328621&o=json
            external_identifier: CBDB:328621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HvrFGZd9ssdoXZvL77JxCH
        status: active
        display_name: 王叔果
        merged_into_person_id: null
    - claim:
        id: c_8OdyFMZ4IYQMdXJvANXnzb
        subject_person_id: p_gFygQ7tuxUBRH1guyqGQYP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_g9di9N7eNMAQungG7MFVQX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4J37mqijzwNSg-hNihvHBX
          claim_id: c_8OdyFMZ4IYQMdXJvANXnzb
          source_id: s_FcBVgddWDwtYXVCWR02iX2
          stance: supports
          locator: CBDB：兄弟 王叔杲（126579）之父／母 王澈
          quotation: null
          interpretation_note: 由兄弟关系推断：王叔本 与 王叔杲 为同胞（CBDB 记「兄」），王叔杲 之父／母即 王叔本 之父／母。
          source:
            id: s_FcBVgddWDwtYXVCWR02iX2
            source_type: api_record
            title: 中国历代人物传记资料库：王叔本（CBDB 328622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328622&o=json
            external_identifier: CBDB:328622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_g9di9N7eNMAQungG7MFVQX
        status: active
        display_name: 王叔本
        merged_into_person_id: null
    - claim:
        id: c_8avTLjMQ4S5YUiFJ2bD0PY
        subject_person_id: p_gFygQ7tuxUBRH1guyqGQYP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sN9FriBxSGp1pjQ5sQLWhp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zZv5hfqC0zqxuJWyhM0vbT
          claim_id: c_8avTLjMQ4S5YUiFJ2bD0PY
          source_id: s_RWtGdjvczb2SztWRfXevt6
          stance: supports
          locator: CBDB：兄弟 王叔杲（126579）之父／母 王澈
          quotation: null
          interpretation_note: 由兄弟关系推断：王叔懋 与 王叔杲 为同胞（CBDB 记「弟」），王叔杲 之父／母即 王叔懋 之父／母。
          source:
            id: s_RWtGdjvczb2SztWRfXevt6
            source_type: api_record
            title: 中国历代人物传记资料库：王叔懋（CBDB 328620）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328620&o=json
            external_identifier: CBDB:328620
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sN9FriBxSGp1pjQ5sQLWhp
        status: active
        display_name: 王叔懋
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王澈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澈 | accepted |
| bio.summary | 王澈，明人物。嘉靖四十一年進士，籍贯永嘉，曾任布政使司左參議、朝議大夫。（中国历代人物传记资料库 CBDB 328614） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2q5oLPYeHNC3ozo65nG5VF | 王叔杲 | accepted |
| children | p_HvrFGZd9ssdoXZvL77JxCH | 王叔果 | accepted |
| children | p_g9di9N7eNMAQungG7MFVQX | 王叔本 | accepted |
| children | p_sN9FriBxSGp1pjQ5sQLWhp | 王叔懋 | accepted |

## 外部来源

- [中国历代人物传记资料库：王澈（CBDB 328614）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328614&o=json)
- [中国历代人物传记资料库：王叔本（CBDB 328622）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328622&o=json)
- [中国历代人物传记资料库：王叔杲（CBDB 126579）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126579&o=json)
- [中国历代人物传记资料库：王叔果（CBDB 328621）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328621&o=json)
- [中国历代人物传记资料库：王叔懋（CBDB 328620）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328620&o=json)
