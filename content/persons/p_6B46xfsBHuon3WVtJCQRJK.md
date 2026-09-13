---
schema: wang-person/v1
id: p_6B46xfsBHuon3WVtJCQRJK
status: active
merged_into: null
display_name: 毕氏
cbdb_id: 211357
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4DtdBjFnQn1SJYBeWno6KQ
        subject_person_id: p_6B46xfsBHuon3WVtJCQRJK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 毕氏，明人物。隆慶五年進士。（中国历代人物传记资料库 CBDB 211357）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_t9YDC3RaAJxh46DlIbqSlX
          claim_id: c_4DtdBjFnQn1SJYBeWno6KQ
          source_id: s_GxeLkEJYqKPBDdaVPgF6HG
          stance: supports
          locator: CBDB:211357
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_GxeLkEJYqKPBDdaVPgF6HG
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：畢氏（211357）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211357&o=json
            external_identifier: CBDB:211357
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:42.343Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_iq5U1ye2dRrJZb3Y3He2dF
        subject_person_id: p_6B46xfsBHuon3WVtJCQRJK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 毕氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_LHUBspjtH2DgyewcxycXDP
          claim_id: c_iq5U1ye2dRrJZb3Y3He2dF
          source_id: s_4HfKhvMNNm5d5WJJkokJXG
          stance: supports
          locator: Q65813497
          quotation: null
          interpretation_note: null
          source:
            id: s_4HfKhvMNNm5d5WJJkokJXG
            source_type: api_record
            title: 维基数据：毕氏（Q65813497）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65813497
            external_identifier: Q65813497
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:42.169Z
            metadata_json: null
        - id: cs_uwusj6vjqTwBr2CfrxUFrP
          claim_id: c_iq5U1ye2dRrJZb3Y3He2dF
          source_id: s_GxeLkEJYqKPBDdaVPgF6HG
          stance: supports
          locator: Q65813497
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
        id: c_iFwGemS5MrfYTrYuGS7uDG
        subject_person_id: p_6B46xfsBHuon3WVtJCQRJK
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_mNbLtBp7NLKek2NHmVT5fp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MgW9ZdGcMYvF6GpZv2oWAe
          claim_id: c_iFwGemS5MrfYTrYuGS7uDG
          source_id: s_vA6M1gzd5DTHK2a1CpPxhe
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_vA6M1gzd5DTHK2a1CpPxhe
            source_type: api_record
            title: 维基数据：王象乾（Q15915390）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15915390
            external_identifier: Q15915390
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:16.425Z
            metadata_json: null
        - id: cs_QN9b5rXJdRVMkGatCmB36w
          claim_id: c_iFwGemS5MrfYTrYuGS7uDG
          source_id: s_UwFcuYr9JZAkkMHAjy1jmC
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：隆慶五年進士登科錄:一卷
          source:
            id: s_UwFcuYr9JZAkkMHAjy1jmC
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王象乾（65764）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65764&o=json
            external_identifier: CBDB:65764
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:22.515Z
            metadata_json: null
        - id: cs_pc5EGDMKePneqNfwqkxUG6
          claim_id: c_iFwGemS5MrfYTrYuGS7uDG
          source_id: s_4HfKhvMNNm5d5WJJkokJXG
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_4HfKhvMNNm5d5WJJkokJXG
            source_type: api_record
            title: 维基数据：毕氏（Q65813497）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65813497
            external_identifier: Q65813497
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:42.169Z
            metadata_json: null
      object_person:
        id: p_mNbLtBp7NLKek2NHmVT5fp
        status: active
        display_name: 王象乾
        merged_into_person_id: null
    - claim:
        id: c_TgRzaIDr7KpUgua7Kab9DO
        subject_person_id: p_6B46xfsBHuon3WVtJCQRJK
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_F188zxtPQfzqFJEz9WJ3M7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MKfBCFb9nYAnQok2-kDgk5
          claim_id: c_TgRzaIDr7KpUgua7Kab9DO
          source_id: s_GxeLkEJYqKPBDdaVPgF6HG
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百三十二名：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_F188zxtPQfzqFJEz9WJ3M7
        status: active
        display_name: 王象乾
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 毕氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 毕氏，明人物。隆慶五年進士。（中国历代人物传记资料库 CBDB 211357） | accepted |
| name.primary | 毕氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_mNbLtBp7NLKek2NHmVT5fp | 王象乾 | accepted |
| spouses | p_F188zxtPQfzqFJEz9WJ3M7 | 王象乾 | accepted |

## 外部来源

- [维基数据：毕氏（Q65813497）](https://www.wikidata.org/wiki/Q65813497)
- [维基数据：王象乾（Q15915390）](https://www.wikidata.org/wiki/Q15915390)
- [CBDB 中国历代人物传记资料库：畢氏（211357）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211357&o=json)
- [CBDB 中国历代人物传记资料库：王象乾（65764）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65764&o=json)
