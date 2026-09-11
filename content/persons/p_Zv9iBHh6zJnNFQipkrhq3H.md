---
schema: wang-person/v1
id: p_Zv9iBHh6zJnNFQipkrhq3H
status: active
merged_into: null
display_name: 王億
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RsDVixoVDJgDgmvykknfB6
        subject_person_id: p_Zv9iBHh6zJnNFQipkrhq3H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王億
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5ETdLbtEHdeS5cD1mHGn4G
          claim_id: c_RsDVixoVDJgDgmvykknfB6
          source_id: s_NkUDw2KFGUuhuLHMfCDtDi
          stance: supports
          locator: CBDB:199236
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199236）
          source: &a1
            id: s_NkUDw2KFGUuhuLHMfCDtDi
            source_type: api_record
            title: 中国历代人物传记资料库：王億（CBDB 199236）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199236&o=json
            external_identifier: CBDB:199236
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.534Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_nsuhqUHBau5QH5WpCtDdDs
        subject_person_id: p_Zv9iBHh6zJnNFQipkrhq3H
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1432年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w7357szUm4PM8dNkJFrZtM
          claim_id: c_nsuhqUHBau5QH5WpCtDdDs
          source_id: s_NkUDw2KFGUuhuLHMfCDtDi
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BevCa579y4tJ56ibiYEhvE
        subject_person_id: p_Zv9iBHh6zJnNFQipkrhq3H
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Wy5W4nMS5Yf8uMCtgFMBQz
          claim_id: c_BevCa579y4tJ56ibiYEhvE
          source_id: s_NkUDw2KFGUuhuLHMfCDtDi
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_M4KxMxk8phSLXOPT0EiZ0q
        subject_person_id: p_4C5VKRVzuAvr67X2BV8fCM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Zv9iBHh6zJnNFQipkrhq3H
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b86fjnoK59mGLdwi8VJS_c
          claim_id: c_M4KxMxk8phSLXOPT0EiZ0q
          source_id: s_uP29PrTEmYii49WH6cPBB1
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第二百零二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_uP29PrTEmYii49WH6cPBB1
            source_type: api_record
            title: 中国历代人物传记资料库：王仲亨（CBDB 236828）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236828&o=json
            external_identifier: CBDB:236828
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.803Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4C5VKRVzuAvr67X2BV8fCM
        status: active
        display_name: 王仲亨
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_ESoVWsjJSDAa3cBA9nuEZc
        subject_person_id: p_1cUCidbF85cd8DWrZcACj3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Zv9iBHh6zJnNFQipkrhq3H
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yymBVfEqy7SX1_9d8C3pKG
          claim_id: c_ESoVWsjJSDAa3cBA9nuEZc
          source_id: s_oXRjf1kBatv1gFGRM2Nw4h
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第二百零二名：曾孫；重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oXRjf1kBatv1gFGRM2Nw4h
            source_type: api_record
            title: 中国历代人物传记资料库：王德昇（CBDB 242133）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242133&o=json
            external_identifier: CBDB:242133
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.969Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1cUCidbF85cd8DWrZcACj3
        status: active
        display_name: 王德昇
        merged_into_person_id: null
    - claim:
        id: c_4HVK4XPYa8RHOX3GQGWVdq
        subject_person_id: p_jgukCQ6yXT1KHa2JP2QrQF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Zv9iBHh6zJnNFQipkrhq3H
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5UNHRZPPXYx_ZrxWfdAA4W
          claim_id: c_4HVK4XPYa8RHOX3GQGWVdq
          source_id: s_3QYpbUb1KA1PLDW4B4gFnk
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第二百零二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3QYpbUb1KA1PLDW4B4gFnk
            source_type: api_record
            title: 中国历代人物传记资料库：王勝宗（CBDB 236827）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236827&o=json
            external_identifier: CBDB:236827
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.802Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jgukCQ6yXT1KHa2JP2QrQF
        status: active
        display_name: 王勝宗
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王億

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王億 | accepted |
| birth.date | 1432年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4C5VKRVzuAvr67X2BV8fCM | 王仲亨 | accepted |
| ancestors | p_1cUCidbF85cd8DWrZcACj3 | 王德昇 | accepted |
| ancestors | p_jgukCQ6yXT1KHa2JP2QrQF | 王勝宗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德昇（CBDB 242133）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242133&o=json)
- [中国历代人物传记资料库：王勝宗（CBDB 236827）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236827&o=json)
- [中国历代人物传记资料库：王億（CBDB 199236）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199236&o=json)
- [中国历代人物传记资料库：王仲亨（CBDB 236828）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236828&o=json)
