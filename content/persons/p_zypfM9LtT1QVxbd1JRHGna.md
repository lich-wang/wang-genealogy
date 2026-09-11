---
schema: wang-person/v1
id: p_zypfM9LtT1QVxbd1JRHGna
status: active
merged_into: null
display_name: 王一麟
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_57L2pa85rG1WF8hQnoicCi
        subject_person_id: p_zypfM9LtT1QVxbd1JRHGna
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_trSwayLzUWbuksq6DWRZ4B
          claim_id: c_57L2pa85rG1WF8hQnoicCi
          source_id: s_AEVxHeh2ZLciAdAQqRKWrX
          stance: supports
          locator: CBDB:201540
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201540）
          source: &a1
            id: s_AEVxHeh2ZLciAdAQqRKWrX
            source_type: api_record
            title: 中国历代人物传记资料库：王一麟（CBDB 201540）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201540&o=json
            external_identifier: CBDB:201540
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.684Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_fVviEsbBJCX6Cn87TgbBP6
        subject_person_id: p_zypfM9LtT1QVxbd1JRHGna
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1473年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GGV6nMLMRJd8Npq6yVKz6W
          claim_id: c_fVviEsbBJCX6Cn87TgbBP6
          source_id: s_AEVxHeh2ZLciAdAQqRKWrX
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
        id: c_o7MM94c754ErKTT4pSa5nY
        subject_person_id: p_zypfM9LtT1QVxbd1JRHGna
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
        - id: cs_EJ6mY4xGn6kUtgLKHdYzKo
          claim_id: c_o7MM94c754ErKTT4pSa5nY
          source_id: s_AEVxHeh2ZLciAdAQqRKWrX
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
        id: c_a5esC13_CSruIZLXdahB3s
        subject_person_id: p_dPbUUoQEGcRs5zuUF67Td8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zypfM9LtT1QVxbd1JRHGna
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fsOvLH33kZgIqZi01DDAd1
          claim_id: c_a5esC13_CSruIZLXdahB3s
          source_id: s_37EqMwj6AWqcVdX4xs8pBL
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第三十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_37EqMwj6AWqcVdX4xs8pBL
            source_type: api_record
            title: 中国历代人物传记资料库：王坤（CBDB 274038）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274038&o=json
            external_identifier: CBDB:274038
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.916Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dPbUUoQEGcRs5zuUF67Td8
        status: active
        display_name: 王坤
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_NNJAy7N3lKHsWBc0xr6nsx
        subject_person_id: p_gFc3Rf5a5Mfq6rFLvqYhTf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zypfM9LtT1QVxbd1JRHGna
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AEglvMng1o1BSgJYphW7X_
          claim_id: c_NNJAy7N3lKHsWBc0xr6nsx
          source_id: s_j2mCVcTRwCEH9QUBwGURvp
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第三十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_j2mCVcTRwCEH9QUBwGURvp
            source_type: api_record
            title: 中国历代人物传记资料库：王真（CBDB 274036）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274036&o=json
            external_identifier: CBDB:274036
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.915Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gFc3Rf5a5Mfq6rFLvqYhTf
        status: active
        display_name: 王真
        merged_into_person_id: null
    - claim:
        id: c_sMw3DIBIh2GaVKL76jQd03
        subject_person_id: p_wLmeXdPTK5DspfSqgEss4M
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zypfM9LtT1QVxbd1JRHGna
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oMGNKKBTzm67WqkggPR2Rf
          claim_id: c_sMw3DIBIh2GaVKL76jQd03
          source_id: s_3qRj5bLr4mjQGTzym2Wty6
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第三十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3qRj5bLr4mjQGTzym2Wty6
            source_type: api_record
            title: 中国历代人物传记资料库：王必高（CBDB 274037）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274037&o=json
            external_identifier: CBDB:274037
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_wLmeXdPTK5DspfSqgEss4M
        status: active
        display_name: 王必高
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王一麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一麟 | accepted |
| birth.date | 1473年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dPbUUoQEGcRs5zuUF67Td8 | 王坤 | accepted |
| ancestors | p_gFc3Rf5a5Mfq6rFLvqYhTf | 王真 | accepted |
| ancestors | p_wLmeXdPTK5DspfSqgEss4M | 王必高 | accepted |

## 外部来源

- [中国历代人物传记资料库：王必高（CBDB 274037）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274037&o=json)
- [中国历代人物传记资料库：王坤（CBDB 274038）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274038&o=json)
- [中国历代人物传记资料库：王一麟（CBDB 201540）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201540&o=json)
- [中国历代人物传记资料库：王真（CBDB 274036）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274036&o=json)
