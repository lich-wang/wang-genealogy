---
schema: wang-person/v1
id: p_C1tV5ZY5YvAKhLKZaKXppK
status: active
merged_into: null
display_name: 黄氏
cbdb_id: 38478
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5aQkLTHxgrExCjXGb0uDJZ
        subject_person_id: p_C1tV5ZY5YvAKhLKZaKXppK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 黄氏，宋人物。曾任郡夫人。（中国历代人物传记资料库 CBDB 38478）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CC1l7AKhF0VGYOZN4TaTWX
          claim_id: c_5aQkLTHxgrExCjXGb0uDJZ
          source_id: s_nKGFt6E8i7pKJcoejNKDLH
          stance: supports
          locator: CBDB:38478
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_nKGFt6E8i7pKJcoejNKDLH
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：黃氏（38478）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38478&o=json
            external_identifier: CBDB:38478
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_yaoSwPwFrxabrnenmN8ajN
        subject_person_id: p_C1tV5ZY5YvAKhLKZaKXppK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 黄氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5xSjbq2BJVQGjWNhRsPkNi
          claim_id: c_yaoSwPwFrxabrnenmN8ajN
          source_id: s_UZDEw7ijuhYV7Gx4Qzd6Zk
          stance: supports
          locator: Q45431261
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a2
            id: s_UZDEw7ijuhYV7Gx4Qzd6Zk
            source_type: api_record
            title: 维基数据：黄氏（Q45431261）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45431261
            external_identifier: Q45431261
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_61xmYVKEiAKf2RgK3vcpp9
          claim_id: c_yaoSwPwFrxabrnenmN8ajN
          source_id: s_nKGFt6E8i7pKJcoejNKDLH
          stance: supports
          locator: CBDB:38478
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_NKZoNot1iMFkP12AgC2pVg
        subject_person_id: p_C1tV5ZY5YvAKhLKZaKXppK
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_UaNg1wksvazhfK4rTdvraK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_76CWemvsjq5mEjXnbiEr9L
          claim_id: c_NKZoNot1iMFkP12AgC2pVg
          source_id: s_UZDEw7ijuhYV7Gx4Qzd6Zk
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_y9vS68USmNiRAqHbboshpH
          claim_id: c_NKZoNot1iMFkP12AgC2pVg
          source_id: s_o2Ns99Rj2oBxz39K8qiTbJ
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_o2Ns99Rj2oBxz39K8qiTbJ
            source_type: api_record
            title: 维基数据：王文（Q45401645）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401645
            external_identifier: Q45401645
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:16.211Z
            metadata_json: null
        - id: cs_GLTjvCHJXkcnHh7snMhPKg
          claim_id: c_NKZoNot1iMFkP12AgC2pVg
          source_id: s_LKRgQGQseaZnwczbiBNqeA
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_LKRgQGQseaZnwczbiBNqeA
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王文（21992）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21992&o=json
            external_identifier: CBDB:21992
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:16.375Z
            metadata_json: null
      object_person:
        id: p_UaNg1wksvazhfK4rTdvraK
        status: active
        display_name: 王文
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 黄氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 黄氏，宋人物。曾任郡夫人。（中国历代人物传记资料库 CBDB 38478） | accepted |
| name.primary | 黄氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_UaNg1wksvazhfK4rTdvraK | 王文 | accepted |

## 外部来源

- [维基数据：黄氏（Q45431261）](https://www.wikidata.org/wiki/Q45431261)
- [维基数据：王文（Q45401645）](https://www.wikidata.org/wiki/Q45401645)
- [CBDB 中国历代人物传记资料库：黃氏（38478）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38478&o=json)
- [CBDB 中国历代人物传记资料库：王文（21992）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21992&o=json)
