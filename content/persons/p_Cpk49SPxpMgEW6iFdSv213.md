---
schema: wang-person/v1
id: p_Cpk49SPxpMgEW6iFdSv213
status: active
merged_into: null
display_name: 杨氏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_baCimdUPNJagm5GJAZSFF8
        subject_person_id: p_Cpk49SPxpMgEW6iFdSv213
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 杨氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4JYZASJeUTJgmR5LvhrvCh
          claim_id: c_baCimdUPNJagm5GJAZSFF8
          source_id: s_iMaqygLoMuRt4MwC2R1uqb
          stance: supports
          locator: Q65861477
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_iMaqygLoMuRt4MwC2R1uqb
            source_type: api_record
            title: 维基数据：杨氏（Q65861477）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65861477
            external_identifier: Q65861477
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_nKfLPpj9QEPy6jAiV5KUUE
          claim_id: c_baCimdUPNJagm5GJAZSFF8
          source_id: s_Y8hkLqdsJJkfzA8eP7H8Bk
          stance: supports
          locator: CBDB:334085
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_Y8hkLqdsJJkfzA8eP7H8Bk
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：楊氏（334085）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334085&o=json
            external_identifier: CBDB:334085
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_ScLQsoVjWif4e2GpLuE6Rp
        subject_person_id: p_Cpk49SPxpMgEW6iFdSv213
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_iRoPCMQGG7T8QWQEfbMdBx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N5MXBDoudoyBeh7Bt6wjC1
          claim_id: c_ScLQsoVjWif4e2GpLuE6Rp
          source_id: s_iMaqygLoMuRt4MwC2R1uqb
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_4ykY6NcNuHuBNNNCjoTigC
          claim_id: c_ScLQsoVjWif4e2GpLuE6Rp
          source_id: s_4aAHVT5jB6WtTJCwPKgxKa
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_4aAHVT5jB6WtTJCwPKgxKa
            source_type: api_record
            title: 维基数据：王汝鲁（Q45577422）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45577422
            external_identifier: Q45577422
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:07.754Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B1%9D%E9%AD%AF
        - id: cs_C8trRLxDh2VQbv6seHXiQc
          claim_id: c_ScLQsoVjWif4e2GpLuE6Rp
          source_id: s_mrU2gd98oKTzUYL8GJNQru
          stance: supports
          locator: 亲属关系：第二任妻
          quotation: null
          interpretation_note: CBDB 注明此条来源：隆慶二年進士登科錄:一卷
          source:
            id: s_mrU2gd98oKTzUYL8GJNQru
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王汝魯（126502）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126502&o=json
            external_identifier: CBDB:126502
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:07.904Z
            metadata_json: null
      object_person:
        id: p_iRoPCMQGG7T8QWQEfbMdBx
        status: active
        display_name: 王汝鲁
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 杨氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 杨氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_iRoPCMQGG7T8QWQEfbMdBx | 王汝鲁 | accepted |

## 外部来源

- [维基数据：王汝鲁（Q45577422）](https://www.wikidata.org/wiki/Q45577422)
- [维基数据：杨氏（Q65861477）](https://www.wikidata.org/wiki/Q65861477)
- [CBDB 中国历代人物传记资料库：王汝魯（126502）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126502&o=json)
- [CBDB 中国历代人物传记资料库：楊氏（334085）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334085&o=json)
