---
schema: wang-person/v1
id: p_bF6WY3wgJWVigFgpBLaV3H
status: active
merged_into: null
display_name: 王璽
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Sn59CQZt4Cr69QBzS8dXKK
        subject_person_id: p_bF6WY3wgJWVigFgpBLaV3H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wWyhnfE5rzphPWPMpnSHEa
          claim_id: c_Sn59CQZt4Cr69QBzS8dXKK
          source_id: s_yZPHRZDqekh7sfwo5VRKKY
          stance: supports
          locator: CBDB:126869
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126869）
          source: &a1
            id: s_yZPHRZDqekh7sfwo5VRKKY
            source_type: api_record
            title: 中国历代人物传记资料库：王璽（CBDB 126869）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126869&o=json
            external_identifier: CBDB:126869
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.272Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_94KW3UEcxCxhwjTLL55tya
        subject_person_id: p_bF6WY3wgJWVigFgpBLaV3H
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1416年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dA58xHxtQbbvm1JMFs3uKL
          claim_id: c_94KW3UEcxCxhwjTLL55tya
          source_id: s_yZPHRZDqekh7sfwo5VRKKY
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_YH7cLBAdcZk7feVe3BhK9N
        subject_person_id: p_bF6WY3wgJWVigFgpBLaV3H
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1492年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VJ5W636ribx9Xi861q56sE
          claim_id: c_YH7cLBAdcZk7feVe3BhK9N
          source_id: s_yZPHRZDqekh7sfwo5VRKKY
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JaoczKD7PAB4NnEPRtUVQs
        subject_person_id: p_bF6WY3wgJWVigFgpBLaV3H
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
        - id: cs_CwvHzDHigs5Be2Sd3DPLZn
          claim_id: c_JaoczKD7PAB4NnEPRtUVQs
          source_id: s_yZPHRZDqekh7sfwo5VRKKY
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
        id: c_LfEinVRzYAVCn_mf5oHGD-
        subject_person_id: p_5CsnxPJ1Pqskb685MNmLx9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bF6WY3wgJWVigFgpBLaV3H
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UAY42Qb6NjwF-Mt8z5hFeq
          claim_id: c_LfEinVRzYAVCn_mf5oHGD-
          source_id: s_HnV2yB88d2LDzZ44BKY5Y3
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第五十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HnV2yB88d2LDzZ44BKY5Y3
            source_type: api_record
            title: 中国历代人物传记资料库：王鎬（CBDB 241137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241137&o=json
            external_identifier: CBDB:241137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.945Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5CsnxPJ1Pqskb685MNmLx9
        status: active
        display_name: 王鎬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_NUSWzDf21GganExuYVFbz9
        subject_person_id: p_32BLPDKJangJT5tNVMnCFe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_bF6WY3wgJWVigFgpBLaV3H
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3nEb8WaeZEP1HENqOkkFdX
          claim_id: c_NUSWzDf21GganExuYVFbz9
          source_id: s_K6zqDpk8r6QfRuJW6sAPAY
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第五十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_K6zqDpk8r6QfRuJW6sAPAY
            source_type: api_record
            title: 中国历代人物传记资料库：王永福（CBDB 241135）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241135&o=json
            external_identifier: CBDB:241135
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.944Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_32BLPDKJangJT5tNVMnCFe
        status: active
        display_name: 王永福
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王璽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璽 | accepted |
| birth.date | 1416年 | accepted |
| death.date | 1492年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5CsnxPJ1Pqskb685MNmLx9 | 王鎬 | accepted |
| ancestors | p_32BLPDKJangJT5tNVMnCFe | 王永福 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鎬（CBDB 241137）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241137&o=json)
- [中国历代人物传记资料库：王璽（CBDB 126869）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126869&o=json)
- [中国历代人物传记资料库：王永福（CBDB 241135）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241135&o=json)
