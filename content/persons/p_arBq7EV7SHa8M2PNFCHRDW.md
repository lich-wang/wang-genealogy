---
schema: wang-person/v1
id: p_arBq7EV7SHa8M2PNFCHRDW
status: active
merged_into: null
display_name: 王玉林
cbdb_id: 69122
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GNENiHsG5QxKbhWWnwz1CH
        subject_person_id: p_arBq7EV7SHa8M2PNFCHRDW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉林（卒于1860年），清人物。籍贯華陽，入仕募入軍伍，曾任左營守備。（中国历代人物传记资料库 CBDB 69122）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_oZ9tGyaZuLhjcJxff2u-eo
          claim_id: c_GNENiHsG5QxKbhWWnwz1CH
          source_id: s_5Yxb5Qz8yHCRqBFo5HXQLW
          stance: supports
          locator: CBDB:69122
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_5Yxb5Qz8yHCRqBFo5HXQLW
            source_type: api_record
            title: 中国历代人物传记资料库：王玉林（CBDB 69122）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69122&o=json
            external_identifier: CBDB:69122
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:34.254Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_qcUoQB2AVJ4yD6o2NjLUPG
        subject_person_id: p_arBq7EV7SHa8M2PNFCHRDW
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1860年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 1860-01-01
            latest: 1860-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Xf7hKRWxkEYruQgLtaXnUm
          claim_id: c_qcUoQB2AVJ4yD6o2NjLUPG
          source_id: s_5Yxb5Qz8yHCRqBFo5HXQLW
          stance: supports
          locator: CBDB:69122
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1860
          source:
            id: s_5Yxb5Qz8yHCRqBFo5HXQLW
            source_type: api_record
            title: 中国历代人物传记资料库：王玉林（CBDB 69122）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69122&o=json
            external_identifier: CBDB:69122
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:34.254Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4BrF1ZgzoUfZVxcAd9F3JB
        subject_person_id: p_arBq7EV7SHa8M2PNFCHRDW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉林
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_faLLd3PYB3JJEReUSLrzNu
          claim_id: c_4BrF1ZgzoUfZVxcAd9F3JB
          source_id: s_5Yxb5Qz8yHCRqBFo5HXQLW
          stance: supports
          locator: CBDB:69122
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1860
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ZB0sqW60hpTNXWixfUPhQU
        subject_person_id: p_UBLQQQA91DrKBnu73ejAws
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_arBq7EV7SHa8M2PNFCHRDW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xtReQJ4UA9A1UUTT403xmC
          claim_id: c_ZB0sqW60hpTNXWixfUPhQU
          source_id: s_9AnKjJk335BDp-gqFnB2tM
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 69122 王玉林）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_9AnKjJk335BDp-gqFnB2tM
            source_type: api_record
            title: 中国历代人物传记资料库：王鍾林（CBDB 526704）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526704&o=json
            external_identifier: CBDB:526704
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UBLQQQA91DrKBnu73ejAws
        status: active
        display_name: 王鍾林
        merged_into_person_id: null
---

# 王玉林

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王玉林（卒于1860年），清人物。籍贯華陽，入仕募入軍伍，曾任左營守備。（中国历代人物传记资料库 CBDB 69122） | accepted |
| death.date | 1860年 | accepted |
| name.primary | 王玉林 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_UBLQQQA91DrKBnu73ejAws | 王鍾林 | accepted |

## 外部来源

- [中国历代人物传记资料库：王玉林（CBDB 69122）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69122&o=json)
- [中国历代人物传记资料库：王鍾林（CBDB 526704）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526704&o=json)
