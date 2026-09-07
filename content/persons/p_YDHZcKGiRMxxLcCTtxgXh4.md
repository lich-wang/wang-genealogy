---
schema: wang-person/v1
id: p_YDHZcKGiRMxxLcCTtxgXh4
status: active
merged_into: null
display_name: 陈氏
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HtRJ6Djekh0Ptn4KUht_hy
        subject_person_id: p_YDHZcKGiRMxxLcCTtxgXh4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陈氏，王倬妻。维基数据以独立条目 Q65856924 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_nazGSBbl-a8AnthN0IoHs8
          claim_id: c_HtRJ6Djekh0Ptn4KUht_hy
          source_id: s_KtmQidBDmujUswQ4ZqGwCR
          stance: supports
          locator: Q65856924
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_KtmQidBDmujUswQ4ZqGwCR
            source_type: api_record
            title: 维基数据：陈氏（Q65856924）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65856924
            external_identifier: Q65856924
            license_code: CC0-1.0
            accessed_at: 2026-09-05T00:38:02.679Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_EwydwTa6N36vXU8pxsF6Y9
        subject_person_id: p_YDHZcKGiRMxxLcCTtxgXh4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陈氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Cd2FmmJTNr9Fz8daVE22cS
          claim_id: c_EwydwTa6N36vXU8pxsF6Y9
          source_id: s_EBeeMngiQGN21uM1P5RCkw
          stance: supports
          locator: Q65856924
          quotation: null
          interpretation_note: null
          source:
            id: s_EBeeMngiQGN21uM1P5RCkw
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：陳氏（252225）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252225&o=json
            external_identifier: CBDB:252225
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T00:38:02.850Z
            metadata_json: null
        - id: cs_Y48QA3SR9H1JjK3RPizgb6
          claim_id: c_EwydwTa6N36vXU8pxsF6Y9
          source_id: s_KtmQidBDmujUswQ4ZqGwCR
          stance: supports
          locator: Q65856924
          quotation: null
          interpretation_note: null
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
        id: c_6QPp3QMTC5iwUMsL2cpydA
        subject_person_id: p_2CY82LiLunPZpBKWzpBz3S
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_YDHZcKGiRMxxLcCTtxgXh4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_d1UB16cqTbjRyUmtaEs8zZ
          claim_id: c_6QPp3QMTC5iwUMsL2cpydA
          source_id: s_KtmQidBDmujUswQ4ZqGwCR
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_KtmQidBDmujUswQ4ZqGwCR
            source_type: api_record
            title: 维基数据：陈氏（Q65856924）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65856924
            external_identifier: Q65856924
            license_code: CC0-1.0
            accessed_at: 2026-09-05T00:38:02.679Z
            metadata_json: null
        - id: cs_jwuVFDFXkh1pR39ajmro4e
          claim_id: c_6QPp3QMTC5iwUMsL2cpydA
          source_id: s_KiKcwY7ixByX4xMwNVCevX
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：成化十四年進士登科錄:一卷
          source:
            id: s_KiKcwY7ixByX4xMwNVCevX
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王倬（126663）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126663&o=json
            external_identifier: CBDB:126663
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:55.585Z
            metadata_json: null
        - id: cs_ovR1gMKzEb3T7gzh8XjFzw
          claim_id: c_6QPp3QMTC5iwUMsL2cpydA
          source_id: s_WHsNKn1tPFGnXwAiuPuc2t
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_WHsNKn1tPFGnXwAiuPuc2t
            source_type: api_record
            title: 维基数据：王倬（Q20063835）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q20063835
            external_identifier: Q20063835
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:55.454Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%80%AC_(%E6%88%90%E5%8C%96%E9%80%B2%E5%A3%AB)
      object_person:
        id: p_2CY82LiLunPZpBKWzpBz3S
        status: active
        display_name: 王倬
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陈氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 陈氏，王倬妻。维基数据以独立条目 Q65856924 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 陈氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_2CY82LiLunPZpBKWzpBz3S | 王倬 | accepted |

## 外部来源

- [维基数据：陈氏（Q65856924）](https://www.wikidata.org/wiki/Q65856924)
- [维基数据：王倬（Q20063835）](https://www.wikidata.org/wiki/Q20063835)
- [CBDB 中国历代人物传记资料库：陳氏（252225）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252225&o=json)
- [CBDB 中国历代人物传记资料库：王倬（126663）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126663&o=json)
