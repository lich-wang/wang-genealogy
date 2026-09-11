---
schema: wang-person/v1
id: p_rPERXxEMwZa9gPH43DGT1J
status: active
merged_into: null
display_name: 王肅
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_toLa8BFi2WpwzJRJ8GSXGJ
        subject_person_id: p_rPERXxEMwZa9gPH43DGT1J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nMhQYqqo53CcssUHWDtjXV
          claim_id: c_toLa8BFi2WpwzJRJ8GSXGJ
          source_id: s_wz7EFPCRRGfRgq97om172U
          stance: supports
          locator: CBDB:199546
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199546）
          source: &a1
            id: s_wz7EFPCRRGfRgq97om172U
            source_type: api_record
            title: 中国历代人物传记资料库：王肅（CBDB 199546）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199546&o=json
            external_identifier: CBDB:199546
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.556Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_HhwH28EYiHCezqup6eQMHE
        subject_person_id: p_rPERXxEMwZa9gPH43DGT1J
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1436年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h8APdwFAj67hW435Y4T7zh
          claim_id: c_HhwH28EYiHCezqup6eQMHE
          source_id: s_wz7EFPCRRGfRgq97om172U
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
        id: c_QZp6ZcqHmMGfZMPV2bCH2r
        subject_person_id: p_rPERXxEMwZa9gPH43DGT1J
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
        - id: cs_LokHzpwcuHKMifmpKe26wh
          claim_id: c_QZp6ZcqHmMGfZMPV2bCH2r
          source_id: s_wz7EFPCRRGfRgq97om172U
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
        id: c_cxDOCbbkM3bEazaRzkfyMe
        subject_person_id: p_2xBigkvdUU97a4F86QBCjb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rPERXxEMwZa9gPH43DGT1J
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qbrc2i2A4IhKeeFDXTPAIk
          claim_id: c_cxDOCbbkM3bEazaRzkfyMe
          source_id: s_deu4FzrUv1LXSJhSzK1Jy6
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第六十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_deu4FzrUv1LXSJhSzK1Jy6
            source_type: api_record
            title: 中国历代人物传记资料库：王同德（CBDB 246479）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246479&o=json
            external_identifier: CBDB:246479
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.086Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2xBigkvdUU97a4F86QBCjb
        status: active
        display_name: 王同德
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_x0QT3Bj2IIQ8xN3ZC-xWi9
        subject_person_id: p_eNfmXWwQAqx11jVRqVFu7o
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_rPERXxEMwZa9gPH43DGT1J
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2Gwb0R9bNH-U8D_Nt9bdxF
          claim_id: c_x0QT3Bj2IIQ8xN3ZC-xWi9
          source_id: s_J7ASRzcFbLcmHLjfSY2GFC
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第六十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_J7ASRzcFbLcmHLjfSY2GFC
            source_type: api_record
            title: 中国历代人物传记资料库：王中立（CBDB 246477）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246477&o=json
            external_identifier: CBDB:246477
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.086Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_eNfmXWwQAqx11jVRqVFu7o
        status: active
        display_name: 王中立
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王肅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王肅 | accepted |
| birth.date | 1436年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2xBigkvdUU97a4F86QBCjb | 王同德 | accepted |
| ancestors | p_eNfmXWwQAqx11jVRqVFu7o | 王中立 | accepted |

## 外部来源

- [中国历代人物传记资料库：王肅（CBDB 199546）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199546&o=json)
- [中国历代人物传记资料库：王同德（CBDB 246479）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246479&o=json)
- [中国历代人物传记资料库：王中立（CBDB 246477）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246477&o=json)
