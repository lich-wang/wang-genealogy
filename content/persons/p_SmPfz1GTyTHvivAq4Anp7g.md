---
schema: wang-person/v1
id: p_SmPfz1GTyTHvivAq4Anp7g
status: active
merged_into: null
display_name: 王君卿
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fb6hpSHkhbM77GVZC3GEGz
        subject_person_id: p_SmPfz1GTyTHvivAq4Anp7g
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王君卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ayYEyWH9UN23FwAit8rwB7
          claim_id: c_fb6hpSHkhbM77GVZC3GEGz
          source_id: s_Y2W746BP2sur14p96YhEgE
          stance: supports
          locator: CBDB:22882
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22882）
          source: &a1
            id: s_Y2W746BP2sur14p96YhEgE
            source_type: api_record
            title: 中国历代人物传记资料库：王君卿（CBDB 22882）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22882&o=json
            external_identifier: CBDB:22882
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.863Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KWyLj3TEyUp4KXxPc7QQjQ
        subject_person_id: p_SmPfz1GTyTHvivAq4Anp7g
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王君卿，宋人物。籍贯眉山，曾任承議郎。（中国历代人物传记资料库 CBDB 22882）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IFW545TREwcYOSLBX6lTWh
          claim_id: c_KWyLj3TEyUp4KXxPc7QQjQ
          source_id: s_Y2W746BP2sur14p96YhEgE
          stance: supports
          locator: CBDB:22882
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_RhBCULDFeTL2tHXXDgIwsk
        subject_person_id: p_S3M19LwxV4vMoM2EMMcdHu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SmPfz1GTyTHvivAq4Anp7g
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BhJvuDMmo1Xp5zYNKXoikg
          claim_id: c_RhBCULDFeTL2tHXXDgIwsk
          source_id: s_Y2W746BP2sur14p96YhEgE
          stance: supports
          locator: CBDB 双向互证（父 王叔獻 ⇄ 子 王君卿）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_S3M19LwxV4vMoM2EMMcdHu
        status: active
        display_name: 王叔獻
        merged_into_person_id: null
  children:
    - claim:
        id: c_eOxPomR9UKVlAPZAO0EV35
        subject_person_id: p_SmPfz1GTyTHvivAq4Anp7g
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_enjEd3QTh2MFQkVQhR4jLX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ST3VQeRhJr7nPRjbtHOcoN
          claim_id: c_eOxPomR9UKVlAPZAO0EV35
          source_id: s_utoZKafPNXzJUJeK6AaMMW
          stance: supports
          locator: CBDB 双向互证（父 王君卿 ⇄ 子 王襄）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_utoZKafPNXzJUJeK6AaMMW
            source_type: api_record
            title: 中国历代人物传记资料库：王襄（CBDB 22883）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22883&o=json
            external_identifier: CBDB:22883
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.864Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_enjEd3QTh2MFQkVQhR4jLX
        status: active
        display_name: 王襄
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王君卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王君卿 | accepted |
| bio.summary | 王君卿，宋人物。籍贯眉山，曾任承議郎。（中国历代人物传记资料库 CBDB 22882） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_S3M19LwxV4vMoM2EMMcdHu | 王叔獻 | accepted |
| children | p_enjEd3QTh2MFQkVQhR4jLX | 王襄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王君卿（CBDB 22882）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22882&o=json)
- [中国历代人物传记资料库：王襄（CBDB 22883）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22883&o=json)
