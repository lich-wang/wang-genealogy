---
schema: wang-person/v1
id: p_DF9QV6BkQyQ4o3h3Yhn8e4
status: active
merged_into: null
display_name: 王鉉
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_i7wPu4NcqSCok88sBxMJUn
        subject_person_id: p_DF9QV6BkQyQ4o3h3Yhn8e4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KRYmnqNf5zgrqdBZneQFEx
          claim_id: c_i7wPu4NcqSCok88sBxMJUn
          source_id: s_BtUPuCZjyPjh1RLikrHQE4
          stance: supports
          locator: CBDB:201409
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201409）
          source: &a1
            id: s_BtUPuCZjyPjh1RLikrHQE4
            source_type: api_record
            title: 中国历代人物传记资料库：王鉉（CBDB 201409）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201409&o=json
            external_identifier: CBDB:201409
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.676Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_gt2WEZEAiNGDt51ZHX9R3E
        subject_person_id: p_DF9QV6BkQyQ4o3h3Yhn8e4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1468年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5YsHZED8NJQNVJYbX69G6r
          claim_id: c_gt2WEZEAiNGDt51ZHX9R3E
          source_id: s_BtUPuCZjyPjh1RLikrHQE4
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
        id: c_FTH19jK9qNaHsMNjFGkrqW
        subject_person_id: p_DF9QV6BkQyQ4o3h3Yhn8e4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉉（生于1468年），明人物。明清進士進士，籍贯定遼左衛，入仕進士。（中国历代人物传记资料库 CBDB 201409）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mXCnlRNnt0JssYsg-4rBFk
          claim_id: c_FTH19jK9qNaHsMNjFGkrqW
          source_id: s_BtUPuCZjyPjh1RLikrHQE4
          stance: supports
          locator: CBDB:201409
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_enncq81IkCYD2LXqNDeLAw
        subject_person_id: p_qffH2F3mHv5bCaTkpqius6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DF9QV6BkQyQ4o3h3Yhn8e4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kIOVTRWo0_djhDkhkxXc3W
          claim_id: c_enncq81IkCYD2LXqNDeLAw
          source_id: s_BtUPuCZjyPjh1RLikrHQE4
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第一百一十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qffH2F3mHv5bCaTkpqius6
        status: active
        display_name: 王寧
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_mEOyLPG-teXBB7-b8CafxA
        subject_person_id: p_DF9QV6BkQyQ4o3h3Yhn8e4
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_zibqwD2uoDHiM51HV1eNAH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M3hFbY8uDt4T2lLicnR8Xp
          claim_id: c_mEOyLPG-teXBB7-b8CafxA
          source_id: s_vypkK86ZKbniyxYeBk1OcR
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第一百一十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_vypkK86ZKbniyxYeBk1OcR
            source_type: api_record
            title: 中国历代人物传记资料库：蔡氏(王鉉妻)（CBDB 271840）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271840&o=json
            external_identifier: CBDB:271840
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_zibqwD2uoDHiM51HV1eNAH
        status: active
        display_name: 蔡氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_zM1ialmQJOUXPTVmso0P6N
        subject_person_id: p_GKLTLPuTh4f7zDqa2sdDWy
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DF9QV6BkQyQ4o3h3Yhn8e4
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pacFriyb0saquzEpBXG1Q7
          claim_id: c_zM1ialmQJOUXPTVmso0P6N
          source_id: s_BtUPuCZjyPjh1RLikrHQE4
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第一百一十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GKLTLPuTh4f7zDqa2sdDWy
        status: active
        display_name: 王伯成
        merged_into_person_id: null
    - claim:
        id: c_rLeZzqEkSCDYyqXAr9s-rV
        subject_person_id: p_yFeXKM8FN8VTYwQ3gE9fLv
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DF9QV6BkQyQ4o3h3Yhn8e4
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TTJoK6q97KipuCzyQPIv2P
          claim_id: c_rLeZzqEkSCDYyqXAr9s-rV
          source_id: s_BtUPuCZjyPjh1RLikrHQE4
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第一百一十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yFeXKM8FN8VTYwQ3gE9fLv
        status: active
        display_name: 王海
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_pZvu1aEJ6udyWdjR3BW6PZ
        subject_person_id: p_D9u234QtrbAguRnhxHF9v7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_DF9QV6BkQyQ4o3h3Yhn8e4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SgOdfJe9cvjX7MVqOCbx2a
          claim_id: c_pZvu1aEJ6udyWdjR3BW6PZ
          source_id: s_YIKQjTPa56M08pcWfIa22v
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201409 王鉉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_YIKQjTPa56M08pcWfIa22v
            source_type: api_record
            title: 中国历代人物传记资料库：王錡（CBDB 271841）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271841&o=json
            external_identifier: CBDB:271841
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_D9u234QtrbAguRnhxHF9v7
        status: active
        display_name: 王錡
        merged_into_person_id: null
    - claim:
        id: c_sTU6FzbzgHSTkuKdE2_dTG
        subject_person_id: p_DF9QV6BkQyQ4o3h3Yhn8e4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RE8oGxyQjuPS91HGwbGa4V
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6kVxAx8WuCa16577nebqYX
          claim_id: c_sTU6FzbzgHSTkuKdE2_dTG
          source_id: s_WYasWTYICikxp1SCOfbF7z
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201409 王鉉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_WYasWTYICikxp1SCOfbF7z
            source_type: api_record
            title: 中国历代人物传记资料库：王鎛（CBDB 271842）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271842&o=json
            external_identifier: CBDB:271842
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RE8oGxyQjuPS91HGwbGa4V
        status: active
        display_name: 王鎛
        merged_into_person_id: null
    - claim:
        id: c_DjfQB81YPWB-44zDyDxUAI
        subject_person_id: p_DF9QV6BkQyQ4o3h3Yhn8e4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_a7FVmHiWaVByPZJHRS69g2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9EuWHUKBoNgKFgObqgJo9v
          claim_id: c_DjfQB81YPWB-44zDyDxUAI
          source_id: s_FZz2WJy6LEw_IAQRJdYkUS
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201409 王鉉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_FZz2WJy6LEw_IAQRJdYkUS
            source_type: api_record
            title: 中国历代人物传记资料库：王鉦（CBDB 271843）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271843&o=json
            external_identifier: CBDB:271843
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_a7FVmHiWaVByPZJHRS69g2
        status: active
        display_name: 王鉦
        merged_into_person_id: null
---

# 王鉉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鉉 | accepted |
| birth.date | 1468年 | accepted |
| bio.summary | 王鉉（生于1468年），明人物。明清進士進士，籍贯定遼左衛，入仕進士。（中国历代人物传记资料库 CBDB 201409） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qffH2F3mHv5bCaTkpqius6 | 王寧 | accepted |
| spouses | p_zibqwD2uoDHiM51HV1eNAH | 蔡氏 | accepted |
| ancestors | p_GKLTLPuTh4f7zDqa2sdDWy | 王伯成 | accepted |
| ancestors | p_yFeXKM8FN8VTYwQ3gE9fLv | 王海 | accepted |
| other | p_D9u234QtrbAguRnhxHF9v7 | 王錡 | accepted |
| other | p_RE8oGxyQjuPS91HGwbGa4V | 王鎛 | accepted |
| other | p_a7FVmHiWaVByPZJHRS69g2 | 王鉦 | accepted |

## 外部来源

- [中国历代人物传记资料库：蔡氏(王鉉妻)（CBDB 271840）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271840&o=json)
- [中国历代人物传记资料库：王鎛（CBDB 271842）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271842&o=json)
- [中国历代人物传记资料库：王錡（CBDB 271841）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271841&o=json)
- [中国历代人物传记资料库：王鉉（CBDB 201409）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201409&o=json)
- [中国历代人物传记资料库：王鉦（CBDB 271843）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271843&o=json)
