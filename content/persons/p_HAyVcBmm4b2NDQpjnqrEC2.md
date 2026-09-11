---
schema: wang-person/v1
id: p_HAyVcBmm4b2NDQpjnqrEC2
status: active
merged_into: null
display_name: 于氏
cbdb_id: 328692
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gMZrtzqWkOSiQHZCYuUR2n
        subject_person_id: p_HAyVcBmm4b2NDQpjnqrEC2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 于氏，王之垣妻。维基数据以独立条目 Q65855527 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_wsLY6NMe45hFUcmNmKJN9Z
          claim_id: c_gMZrtzqWkOSiQHZCYuUR2n
          source_id: s_Vn2PFdnx6m2x53sH6UbEG3
          stance: supports
          locator: Q65855527
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_Vn2PFdnx6m2x53sH6UbEG3
            source_type: api_record
            title: 维基数据：于氏（Q65855527）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65855527
            external_identifier: Q65855527
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:04.556Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tLpyBx11fSVGSGDkEdWJww
        subject_person_id: p_HAyVcBmm4b2NDQpjnqrEC2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 于氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Lneja9tGcXM2tYRJ2vhb8W
          claim_id: c_tLpyBx11fSVGSGDkEdWJww
          source_id: s_Vn2PFdnx6m2x53sH6UbEG3
          stance: supports
          locator: Q65855527
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_WLqC7hQF33gah6dSAVDgny
          claim_id: c_tLpyBx11fSVGSGDkEdWJww
          source_id: s_6ymMX8xcNFyLEUsMd9uNjX
          stance: supports
          locator: Q65855527
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_6ymMX8xcNFyLEUsMd9uNjX
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：于氏（328692）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328692&o=json
            external_identifier: CBDB:328692
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:04.717Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_44A62pHeey3Ycx83sC1CPa
        subject_person_id: p_5yFg7DjLcFzFQKDBRDnwdx
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_HAyVcBmm4b2NDQpjnqrEC2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EJK8gWrrXJ5Bz4PUfzAW1H
          claim_id: c_44A62pHeey3Ycx83sC1CPa
          source_id: s_ZAssKkJ7Zz1SV8m1ak26dK
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_ZAssKkJ7Zz1SV8m1ak26dK
            source_type: api_record
            title: 维基数据：王之垣（Q15942432）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15942432
            external_identifier: Q15942432
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:43.685Z
            metadata_json: null
        - id: cs_dxoBENGLDrRi8KXxadAqZq
          claim_id: c_44A62pHeey3Ycx83sC1CPa
          source_id: s_Vn2PFdnx6m2x53sH6UbEG3
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_Vn2PFdnx6m2x53sH6UbEG3
            source_type: api_record
            title: 维基数据：于氏（Q65855527）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65855527
            external_identifier: Q65855527
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:04.556Z
            metadata_json: null
        - id: cs_nGBsuPERrq6pfzQyjA686G
          claim_id: c_44A62pHeey3Ycx83sC1CPa
          source_id: s_5MAHUj7QCnUDnEFnnRH1GJ
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：嘉靖四十一年進士登科錄:一卷
          source:
            id: s_5MAHUj7QCnUDnEFnnRH1GJ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王之垣（126464）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126464&o=json
            external_identifier: CBDB:126464
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:54.930Z
            metadata_json: null
      object_person:
        id: p_5yFg7DjLcFzFQKDBRDnwdx
        status: active
        display_name: 王之垣
        merged_into_person_id: null
    - claim:
        id: c_JJic6bdoOPMXAj7BzBTSxr
        subject_person_id: p_HAyVcBmm4b2NDQpjnqrEC2
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_esnkJduB5GpM6eiD8Nh16h
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k6Wt04cuSDTXZcbFsSAVjJ
          claim_id: c_JJic6bdoOPMXAj7BzBTSxr
          source_id: s_6ymMX8xcNFyLEUsMd9uNjX
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百四十五名：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_esnkJduB5GpM6eiD8Nh16h
        status: active
        display_name: 王之垣
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 于氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 于氏，王之垣妻。维基数据以独立条目 Q65855527 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 于氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_5yFg7DjLcFzFQKDBRDnwdx | 王之垣 | accepted |
| spouses | p_esnkJduB5GpM6eiD8Nh16h | 王之垣 | accepted |

## 外部来源

- [维基数据：王之垣（Q15942432）](https://www.wikidata.org/wiki/Q15942432)
- [维基数据：于氏（Q65855527）](https://www.wikidata.org/wiki/Q65855527)
- [CBDB 中国历代人物传记资料库：王之垣（126464）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126464&o=json)
- [CBDB 中国历代人物传记资料库：于氏（328692）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328692&o=json)
