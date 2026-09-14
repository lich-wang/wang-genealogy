---
schema: wang-person/v1
id: p_aC1svXXphEQ9jhiLWX1sn6
status: active
merged_into: null
display_name: 王廷
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_msyKa9w24HEz6tyXad93b8
        subject_person_id: p_aC1svXXphEQ9jhiLWX1sn6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oPnLyh7Ssf4YWt75JJFMfs
          claim_id: c_msyKa9w24HEz6tyXad93b8
          source_id: s_7QgGQBjV5ZkFSkB7ZX69xF
          stance: supports
          locator: CBDB:199332
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199332）
          source: &a1
            id: s_7QgGQBjV5ZkFSkB7ZX69xF
            source_type: api_record
            title: 中国历代人物传记资料库：王廷（CBDB 199332）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199332&o=json
            external_identifier: CBDB:199332
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.539Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ytM9MotDBpGeD6wEkWXcsB
        subject_person_id: p_aC1svXXphEQ9jhiLWX1sn6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1444年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M5VkvK6TzELZ3gMMgtVuZz
          claim_id: c_ytM9MotDBpGeD6wEkWXcsB
          source_id: s_7QgGQBjV5ZkFSkB7ZX69xF
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
        id: c_zxC5AHwmi4yBJze15N1o4x
        subject_person_id: p_aC1svXXphEQ9jhiLWX1sn6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷（生于1444年），明人物。明清進士進士，籍贯蒲州，入仕進士。（中国历代人物传记资料库 CBDB 199332）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_N8Eby5dxPpmcMdnjm7Ol2V
          claim_id: c_zxC5AHwmi4yBJze15N1o4x
          source_id: s_7QgGQBjV5ZkFSkB7ZX69xF
          stance: supports
          locator: CBDB:199332
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QD0WrRiIcSKeuErOkP9VCn
        subject_person_id: p_GZ11NySmttrD94bxvY4MjB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aC1svXXphEQ9jhiLWX1sn6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HG7aMD3xn-7gL-hxAzP1JT
          claim_id: c_QD0WrRiIcSKeuErOkP9VCn
          source_id: s_7QgGQBjV5ZkFSkB7ZX69xF
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第十九名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GZ11NySmttrD94bxvY4MjB
        status: active
        display_name: 王秀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_voNY0qm_mpGAe6AXmW6VxF
        subject_person_id: p_aC1svXXphEQ9jhiLWX1sn6
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_xmk7rrT541amNwiP2mV37s
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SyIJOJ2xT5WU0M0nuobHtz
          claim_id: c_voNY0qm_mpGAe6AXmW6VxF
          source_id: s_DogwJSlYrUrAmv_hQE7Arv
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第十九名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DogwJSlYrUrAmv_hQE7Arv
            source_type: api_record
            title: 中国历代人物传记资料库：屈氏(王廷妻)（CBDB 243560）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243560&o=json
            external_identifier: CBDB:243560
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_xmk7rrT541amNwiP2mV37s
        status: active
        display_name: 屈氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_yuq438VS7l3kD0JgWHCsUj
        subject_person_id: p_V1QsLP2bY1JE56Aaj6MmJh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_aC1svXXphEQ9jhiLWX1sn6
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_52MPm3sIM3nSYrmCIndaQ5
          claim_id: c_yuq438VS7l3kD0JgWHCsUj
          source_id: s_7QgGQBjV5ZkFSkB7ZX69xF
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第十九名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_V1QsLP2bY1JE56Aaj6MmJh
        status: active
        display_name: 王信
        merged_into_person_id: null
    - claim:
        id: c_nrImCZv14Sz8ozCSVU0aQ_
        subject_person_id: p_KgveivKC2tAaFmjxPKfPPt
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_aC1svXXphEQ9jhiLWX1sn6
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HxIaDHTLgfKn8bsp0Huohb
          claim_id: c_nrImCZv14Sz8ozCSVU0aQ_
          source_id: s_7QgGQBjV5ZkFSkB7ZX69xF
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第十九名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_KgveivKC2tAaFmjxPKfPPt
        status: active
        display_name: 王祥
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_gCCV7jw2eOwhamitvYnw7h
        subject_person_id: p_Y2fGJGiRYzzgtLi4M6HE2o
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aC1svXXphEQ9jhiLWX1sn6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jzFjRP8OWDThnRWpowCgXD
          claim_id: c_gCCV7jw2eOwhamitvYnw7h
          source_id: s_U_OeUEI1MjVSqTDGyE-1xn
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199332 王廷）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_U_OeUEI1MjVSqTDGyE-1xn
            source_type: api_record
            title: 中国历代人物传记资料库：王鐸（CBDB 243561）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243561&o=json
            external_identifier: CBDB:243561
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Y2fGJGiRYzzgtLi4M6HE2o
        status: active
        display_name: 王鐸
        merged_into_person_id: null
    - claim:
        id: c_cE1eX_sdwZ6xiSc0GwPQb-
        subject_person_id: p_aC1svXXphEQ9jhiLWX1sn6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cUTJ5pLNwGza2zDxcF5sAP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ggM-3l_XxYqPfLUS5Ufi-D
          claim_id: c_cE1eX_sdwZ6xiSc0GwPQb-
          source_id: s_tIALf9UtSZIZ10OJ6wEhJr
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199332 王廷）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_tIALf9UtSZIZ10OJ6wEhJr
            source_type: api_record
            title: 中国历代人物传记资料库：王鉞（CBDB 243562）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243562&o=json
            external_identifier: CBDB:243562
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cUTJ5pLNwGza2zDxcF5sAP
        status: active
        display_name: 王鉞
        merged_into_person_id: null
---

# 王廷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷 | accepted |
| birth.date | 1444年 | accepted |
| bio.summary | 王廷（生于1444年），明人物。明清進士進士，籍贯蒲州，入仕進士。（中国历代人物传记资料库 CBDB 199332） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GZ11NySmttrD94bxvY4MjB | 王秀 | accepted |
| spouses | p_xmk7rrT541amNwiP2mV37s | 屈氏 | accepted |
| ancestors | p_V1QsLP2bY1JE56Aaj6MmJh | 王信 | accepted |
| ancestors | p_KgveivKC2tAaFmjxPKfPPt | 王祥 | accepted |
| other | p_Y2fGJGiRYzzgtLi4M6HE2o | 王鐸 | accepted |
| other | p_cUTJ5pLNwGza2zDxcF5sAP | 王鉞 | accepted |

## 外部来源

- [中国历代人物传记资料库：屈氏(王廷妻)（CBDB 243560）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243560&o=json)
- [中国历代人物传记资料库：王鐸（CBDB 243561）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243561&o=json)
- [中国历代人物传记资料库：王廷（CBDB 199332）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199332&o=json)
- [中国历代人物传记资料库：王鉞（CBDB 243562）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243562&o=json)
