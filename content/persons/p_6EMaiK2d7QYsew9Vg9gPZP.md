---
schema: wang-person/v1
id: p_6EMaiK2d7QYsew9Vg9gPZP
status: active
merged_into: null
display_name: 王華
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vtfwFUPc5a8695HvEXhZkx
        subject_person_id: p_6EMaiK2d7QYsew9Vg9gPZP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9TE24xxmGuTFMfF7ub4cVN
          claim_id: c_vtfwFUPc5a8695HvEXhZkx
          source_id: s_U4WGeE3TRg6Y2JCL5J84jy
          stance: supports
          locator: CBDB:199850
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199850）
          source: &a1
            id: s_U4WGeE3TRg6Y2JCL5J84jy
            source_type: api_record
            title: 中国历代人物传记资料库：王華（CBDB 199850）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199850&o=json
            external_identifier: CBDB:199850
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.580Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ZF9Y3p8ZQifdv4xXrCm5QA
        subject_person_id: p_6EMaiK2d7QYsew9Vg9gPZP
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1450年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NA63Q6JrUco62z9ah5v4GB
          claim_id: c_ZF9Y3p8ZQifdv4xXrCm5QA
          source_id: s_U4WGeE3TRg6Y2JCL5J84jy
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
        id: c_E4ZDMa88p3Wzb48ZVthGMU
        subject_person_id: p_6EMaiK2d7QYsew9Vg9gPZP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王華（生于1450年），明人物。明清進士進士，籍贯南城，入仕進士。（中国历代人物传记资料库 CBDB 199850）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xvOYT-IP5RH2nrGhQjqCB6
          claim_id: c_E4ZDMa88p3Wzb48ZVthGMU
          source_id: s_U4WGeE3TRg6Y2JCL5J84jy
          stance: supports
          locator: CBDB:199850
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_imeFj_bjg4ONGm85_2Ng4S
        subject_person_id: p_dSXaHGfxZk39n9qckAbpLw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6EMaiK2d7QYsew9Vg9gPZP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_luxAdm4IeT2eGs0EbRwLSU
          claim_id: c_imeFj_bjg4ONGm85_2Ng4S
          source_id: s_U4WGeE3TRg6Y2JCL5J84jy
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第一百八十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_dSXaHGfxZk39n9qckAbpLw
        status: active
        display_name: 王用政
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_KfwHaLgFNia0TScPuupOtU
        subject_person_id: p_6EMaiK2d7QYsew9Vg9gPZP
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_zbpfchjodqKUG7ENoVMRrY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MGJOSVnm0wlOqfq5n93c-y
          claim_id: c_KfwHaLgFNia0TScPuupOtU
          source_id: s_BZYNVTt6ULpTLn27dbWkst
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第一百八十名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BZYNVTt6ULpTLn27dbWkst
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王華妻)（CBDB 250479）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250479&o=json
            external_identifier: CBDB:250479
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_zbpfchjodqKUG7ENoVMRrY
        status: active
        display_name: 張氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_-A9Rsm7Q5hUQUb8AXcOMXY
        subject_person_id: p_ty9PKEiXJ1CHxxCE6Rgx3y
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6EMaiK2d7QYsew9Vg9gPZP
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__WMXllYjHh-oPbrFiNaxq1
          claim_id: c_-A9Rsm7Q5hUQUb8AXcOMXY
          source_id: s_U4WGeE3TRg6Y2JCL5J84jy
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第一百八十名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ty9PKEiXJ1CHxxCE6Rgx3y
        status: active
        display_name: 王文琬
        merged_into_person_id: null
    - claim:
        id: c_8WSaJfGd35vZZ1IhWAUbM0
        subject_person_id: p_VHQt9Ff9m57VXky6pqUzLZ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6EMaiK2d7QYsew9Vg9gPZP
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ey7YTbGTdppv_zv2RtUIBF
          claim_id: c_8WSaJfGd35vZZ1IhWAUbM0
          source_id: s_U4WGeE3TRg6Y2JCL5J84jy
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第一百八十名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_VHQt9Ff9m57VXky6pqUzLZ
        status: active
        display_name: 王仲敬
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王華 | accepted |
| birth.date | 1450年 | accepted |
| bio.summary | 王華（生于1450年），明人物。明清進士進士，籍贯南城，入仕進士。（中国历代人物传记资料库 CBDB 199850） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dSXaHGfxZk39n9qckAbpLw | 王用政 | accepted |
| spouses | p_zbpfchjodqKUG7ENoVMRrY | 張氏 | accepted |
| ancestors | p_ty9PKEiXJ1CHxxCE6Rgx3y | 王文琬 | accepted |
| ancestors | p_VHQt9Ff9m57VXky6pqUzLZ | 王仲敬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王華（CBDB 199850）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199850&o=json)
- [中国历代人物传记资料库：張氏(王華妻)（CBDB 250479）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250479&o=json)
