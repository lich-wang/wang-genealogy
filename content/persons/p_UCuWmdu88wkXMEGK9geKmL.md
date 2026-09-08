---
schema: wang-person/v1
id: p_UCuWmdu88wkXMEGK9geKmL
status: active
merged_into: null
display_name: 王象蒙
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Pvt83iWTc727Vhdn5B9XWp
        subject_person_id: p_UCuWmdu88wkXMEGK9geKmL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王象蒙（生于1552年），明人物。CBDB 记录其籍贯记录为新城，入仕记录为科舉: 進士(籠統)，曾任大理寺丞。中国历代人物传记资料库（CBDB）以人物编号 206595 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_XBDQHPZ3dHLv3MReN57FZB
          claim_id: c_Pvt83iWTc727Vhdn5B9XWp
          source_id: s_zLJ9Hfx1NHziz4NGzxh4Dr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_zLJ9Hfx1NHziz4NGzxh4Dr
            source_type: api_record
            title: 维基数据：王象蒙（Q45647401）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45647401
            external_identifier: Q45647401
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:02.160Z
            metadata_json: null
        - id: cs_cvHNUnPm8FYtxDkuo3aNv4
          claim_id: c_Pvt83iWTc727Vhdn5B9XWp
          source_id: s_zcmyoLPxLotZ84tb26zKRH
          stance: supports
          locator: CBDB:206595
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_zcmyoLPxLotZ84tb26zKRH
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王象蒙（206595）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206595&o=json
            external_identifier: CBDB:206595
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:02.345Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_gdCY9LLjqzxQAMG8LQ8mZy
        subject_person_id: p_UCuWmdu88wkXMEGK9geKmL
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1552年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1552-01-01
            latest: 1552-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1oUuhvk8eh5ZVA52vo3y93
          claim_id: c_gdCY9LLjqzxQAMG8LQ8mZy
          source_id: s_zLJ9Hfx1NHziz4NGzxh4Dr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_zLJ9Hfx1NHziz4NGzxh4Dr
            source_type: api_record
            title: 维基数据：王象蒙（Q45647401）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45647401
            external_identifier: Q45647401
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:02.160Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_N4hLGJyhcQ4XbaDVsMm7T8
        subject_person_id: p_UCuWmdu88wkXMEGK9geKmL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象蒙
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_91GstV4fDBuFYmfhdULR9i
          claim_id: c_N4hLGJyhcQ4XbaDVsMm7T8
          source_id: s_zcmyoLPxLotZ84tb26zKRH
          stance: supports
          locator: Q45647401
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_9N6JB1r81S6xPVVbPDprCW
          claim_id: c_N4hLGJyhcQ4XbaDVsMm7T8
          source_id: s_zLJ9Hfx1NHziz4NGzxh4Dr
          stance: supports
          locator: Q45647401
          quotation: null
          interpretation_note: null
          source:
            id: s_zLJ9Hfx1NHziz4NGzxh4Dr
            source_type: api_record
            title: 维基数据：王象蒙（Q45647401）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45647401
            external_identifier: Q45647401
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:02.160Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HQd1y4JpN62jWCE8R1ANwL
        subject_person_id: p_VLPN2ybQtkqyCPrJiYL7vx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UCuWmdu88wkXMEGK9geKmL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NtA1LGCBXXUxZTMQG7E5fk
          claim_id: c_HQd1y4JpN62jWCE8R1ANwL
          source_id: s_HkowMqAvcFAYwo6YGrYb5f
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_HkowMqAvcFAYwo6YGrYb5f
            source_type: api_record
            title: 维基数据：王之辅（Q16075319）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16075319
            external_identifier: Q16075319
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:58.503Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B9%8B%E8%BC%94
        - id: cs_ra5d415KHHNV67vifC8FL7
          claim_id: c_HQd1y4JpN62jWCE8R1ANwL
          source_id: s_zLJ9Hfx1NHziz4NGzxh4Dr
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
      object_person:
        id: p_VLPN2ybQtkqyCPrJiYL7vx
        status: active
        display_name: 王之辅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_2RDr867GXnM84rCZM27YC9
        subject_person_id: p_CoDhAE6fC5JFB1FsBJjCq1
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_UCuWmdu88wkXMEGK9geKmL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rQS7S38PQQ5aCkYGFAmAF4
          claim_id: c_2RDr867GXnM84rCZM27YC9
          source_id: s_zLJ9Hfx1NHziz4NGzxh4Dr
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_WC1UGdDpFEgwqhcBHrFQca
          claim_id: c_2RDr867GXnM84rCZM27YC9
          source_id: s_wM3Ko6rz6aq7Jxb6fMnjDL
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_wM3Ko6rz6aq7Jxb6fMnjDL
            source_type: api_record
            title: 维基数据：邢氏（Q65823254）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65823254
            external_identifier: Q65823254
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_7qxBSe6zLgzKveAXD2Cbce
          claim_id: c_2RDr867GXnM84rCZM27YC9
          source_id: s_zcmyoLPxLotZ84tb26zKRH
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：萬曆八年進士登科錄:一卷
          source: *a1
      object_person:
        id: p_CoDhAE6fC5JFB1FsBJjCq1
        status: active
        display_name: 邢氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王象蒙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王象蒙（生于1552年），明人物。CBDB 记录其籍贯记录为新城，入仕记录为科舉: 進士(籠統)，曾任大理寺丞。中国历代人物传记资料库（CBDB）以人物编号 206595 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| birth.date | 1552年 | accepted |
| name.primary | 王象蒙 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VLPN2ybQtkqyCPrJiYL7vx | 王之辅 | accepted |
| spouses | p_CoDhAE6fC5JFB1FsBJjCq1 | 邢氏 | accepted |

## 外部来源

- [维基数据：王象蒙（Q45647401）](https://www.wikidata.org/wiki/Q45647401)
- [维基数据：王之辅（Q16075319）](https://www.wikidata.org/wiki/Q16075319)
- [维基数据：邢氏（Q65823254）](https://www.wikidata.org/wiki/Q65823254)
- [CBDB 中国历代人物传记资料库：王象蒙（206595）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206595&o=json)
