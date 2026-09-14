---
schema: wang-person/v1
id: p_BsfCh2AEzGCDED5aTcrwpK
status: active
merged_into: null
display_name: 王禛
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Xm6oifTZ4voEgTEtbCDYoU
        subject_person_id: p_BsfCh2AEzGCDED5aTcrwpK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QCPgoqFPQvLQMBEqV5GN3k
          claim_id: c_Xm6oifTZ4voEgTEtbCDYoU
          source_id: s_UXypJcTBSHLdLPtFjMKUNL
          stance: supports
          locator: CBDB:222725
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（222725）
          source: &a1
            id: s_UXypJcTBSHLdLPtFjMKUNL
            source_type: api_record
            title: 中国历代人物传记资料库：王禛（CBDB 222725）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222725&o=json
            external_identifier: CBDB:222725
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.391Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N4ZV5aExcz9KpSo9PVebZJ
        subject_person_id: p_BsfCh2AEzGCDED5aTcrwpK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禛，明人物。萬曆十一年進士，籍贯開州。（中国历代人物传记资料库 CBDB 222725）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EGMajys_eXcxNs95zgkSYu
          claim_id: c_N4ZV5aExcz9KpSo9PVebZJ
          source_id: s_UXypJcTBSHLdLPtFjMKUNL
          stance: supports
          locator: CBDB:222725
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_phdLybIl6RauOMcqtrtbKn
        subject_person_id: p_yE8jyFvK41t2tC3V3Q5knu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BsfCh2AEzGCDED5aTcrwpK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yksgljc7JMwvfkUukjoTV0
          claim_id: c_phdLybIl6RauOMcqtrtbKn
          source_id: s_bV-xNHXnXsNrtK3or3GBb8
          stance: supports
          locator: CBDB：兄弟 王祺（206753）之父／母 王曰銓
          quotation: null
          interpretation_note: 由兄弟关系推断：王禛 与 王祺 为同胞（CBDB 记「兄」），王祺 之父／母即 王禛 之父／母。
          source:
            id: s_bV-xNHXnXsNrtK3or3GBb8
            source_type: api_record
            title: 中国历代人物传记资料库：王禛（CBDB 222725）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222725&o=json
            external_identifier: CBDB:222725
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yE8jyFvK41t2tC3V3Q5knu
        status: active
        display_name: 王曰銓
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_eIySQeN_MB5VnfonsetOkW
        subject_person_id: p_BsfCh2AEzGCDED5aTcrwpK
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dS2fybT134JWfvQgxwSUXh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_76eoFfT84Vl8_kK7LVc_fZ
          claim_id: c_eIySQeN_MB5VnfonsetOkW
          source_id: s_bV-xNHXnXsNrtK3or3GBb8
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206753 王祺）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bV-xNHXnXsNrtK3or3GBb8
            source_type: api_record
            title: 中国历代人物传记资料库：王禛（CBDB 222725）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222725&o=json
            external_identifier: CBDB:222725
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dS2fybT134JWfvQgxwSUXh
        status: active
        display_name: 王祺
        merged_into_person_id: null
---

# 王禛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王禛 | accepted |
| bio.summary | 王禛，明人物。萬曆十一年進士，籍贯開州。（中国历代人物传记资料库 CBDB 222725） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yE8jyFvK41t2tC3V3Q5knu | 王曰銓 | accepted |
| other | p_dS2fybT134JWfvQgxwSUXh | 王祺 | accepted |

## 外部来源

- [中国历代人物传记资料库：王禛（CBDB 222725）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222725&o=json)
