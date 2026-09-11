---
schema: wang-person/v1
id: p_xmk7rrT541amNwiP2mV37s
status: active
merged_into: null
display_name: 屈氏
revision: 1
cbdb_id: 243560
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c__Xbz-uLRuuGb84pTn8zqlo
        subject_person_id: p_xmk7rrT541amNwiP2mV37s
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 屈氏，明人物。成化五年進士。（中国历代人物传记资料库 CBDB 243560）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8v28_ykNjXQx98v3VZTHqo
          claim_id: c__Xbz-uLRuuGb84pTn8zqlo
          source_id: s_DogwJSlYrUrAmv_hQE7Arv
          stance: supports
          locator: CBDB:243560
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3OJ7tl1O_AQ9WoGvjs4oL3
        subject_person_id: p_xmk7rrT541amNwiP2mV37s
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 屈氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1F2CghzDvU6Nxg9obxF28z
          claim_id: c_3OJ7tl1O_AQ9WoGvjs4oL3
          source_id: s_DogwJSlYrUrAmv_hQE7Arv
          stance: supports
          locator: CBDB:243560
          quotation: null
          interpretation_note: CBDB 明确记录的王廷配偶
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
          source: *a1
      object_person:
        id: p_aC1svXXphEQ9jhiLWX1sn6
        status: active
        display_name: 王廷
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 屈氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 屈氏，明人物。成化五年進士。（中国历代人物传记资料库 CBDB 243560） | accepted |
| name.primary | 屈氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_aC1svXXphEQ9jhiLWX1sn6 | 王廷 | accepted |

## 外部来源

- [中国历代人物传记资料库：屈氏(王廷妻)（CBDB 243560）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243560&o=json)
