---
schema: wang-person/v1
id: p_SkgdAvuwzjHa75Hc3PGyxP
status: active
merged_into: null
display_name: 姚氏
cbdb_id: 122994
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vOkT0ZdUAjE2m-M6JjEM4w
        subject_person_id: p_SkgdAvuwzjHa75Hc3PGyxP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 姚氏，王端淑母。维基数据以独立条目 Q65800574 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_sxZlQ6hzS8Dj0CdsgdyK0p
          claim_id: c_vOkT0ZdUAjE2m-M6JjEM4w
          source_id: s_wakrQwuUvUESBZiijA5AtZ
          stance: supports
          locator: Q65800574
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_wakrQwuUvUESBZiijA5AtZ
            source_type: api_record
            title: 维基数据：姚氏（Q65800574）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65800574
            external_identifier: Q65800574
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:06.300Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NW4WgTGQv24PNtif83eTAQ
        subject_person_id: p_SkgdAvuwzjHa75Hc3PGyxP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 姚氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MLiJLLb55BXfTmaRpe8F4E
          claim_id: c_NW4WgTGQv24PNtif83eTAQ
          source_id: s_DW3csh1DK9A8Jk861FCXf3
          stance: supports
          locator: Q65800574
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_DW3csh1DK9A8Jk861FCXf3
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：姚氏（122994）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122994&o=json
            external_identifier: CBDB:122994
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:06.467Z
            metadata_json: null
        - id: cs_PDNxzKuLWbgN8QWoXnZCJg
          claim_id: c_NW4WgTGQv24PNtif83eTAQ
          source_id: s_wakrQwuUvUESBZiijA5AtZ
          stance: supports
          locator: Q65800574
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
        id: c_eknfjydN4GdzjYW9vXnLKZ
        subject_person_id: p_SkgdAvuwzjHa75Hc3PGyxP
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_WgJjrR3eV8FZmEbV9t77oX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3vgMSgDHt1QYoQDJ7bT8qk
          claim_id: c_eknfjydN4GdzjYW9vXnLKZ
          source_id: s_wakrQwuUvUESBZiijA5AtZ
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_wakrQwuUvUESBZiijA5AtZ
            source_type: api_record
            title: 维基数据：姚氏（Q65800574）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65800574
            external_identifier: Q65800574
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:06.300Z
            metadata_json: null
        - id: cs_4cGiR1zA1qzn6ZCmCQRyyR
          claim_id: c_eknfjydN4GdzjYW9vXnLKZ
          source_id: s_Xiup79Q6rjsrG4SdhBjp36
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_Xiup79Q6rjsrG4SdhBjp36
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王思任（71875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71875&o=json
            external_identifier: CBDB:71875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:52.726Z
            metadata_json: null
        - id: cs_UJQC5bYZdeK7Vepmk3FFYZ
          claim_id: c_eknfjydN4GdzjYW9vXnLKZ
          source_id: s_tSz5UtgEYXRtEWdwBQvTsR
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_tSz5UtgEYXRtEWdwBQvTsR
            source_type: api_record
            title: 维基数据：王思任（Q15938368）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15938368
            external_identifier: Q15938368
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:36.824Z
            metadata_json: null
      object_person:
        id: p_WgJjrR3eV8FZmEbV9t77oX
        status: active
        display_name: 王思任
        merged_into_person_id: null
    - claim:
        id: c_9mXMQX-9DM2GG1FBiwIJjc
        subject_person_id: p_SkgdAvuwzjHa75Hc3PGyxP
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ftZ1PRscrPmBh4Qh3AiyfY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oF0zRsNIaXHIZYOPpcriMC
          claim_id: c_9mXMQX-9DM2GG1FBiwIJjc
          source_id: s_DW3csh1DK9A8Jk861FCXf3
          stance: supports
          locator: CBDB 双向互证（丈夫 王思任 ⇄ 妻子 姚氏(王端淑母)）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a2
      object_person:
        id: p_ftZ1PRscrPmBh4Qh3AiyfY
        status: active
        display_name: 王思任
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 姚氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 姚氏，王端淑母。维基数据以独立条目 Q65800574 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 姚氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_WgJjrR3eV8FZmEbV9t77oX | 王思任 | accepted |
| spouses | p_ftZ1PRscrPmBh4Qh3AiyfY | 王思任 | accepted |

## 外部来源

- [维基数据：王思任（Q15938368）](https://www.wikidata.org/wiki/Q15938368)
- [维基数据：姚氏（Q65800574）](https://www.wikidata.org/wiki/Q65800574)
- [CBDB 中国历代人物传记资料库：王思任（71875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71875&o=json)
- [CBDB 中国历代人物传记资料库：姚氏（122994）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122994&o=json)
