---
schema: wang-person/v1
id: p_C41sWozjac1HZPEX2SGUgJ
status: active
merged_into: null
display_name: 王朝佐
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FBA4ULXLDjwa6L8aWsGZU8
        subject_person_id: p_C41sWozjac1HZPEX2SGUgJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pX9Z9TuZYADAK74Dq2Xp7H
          claim_id: c_FBA4ULXLDjwa6L8aWsGZU8
          source_id: s_dRUGmqCaBFkV5AhXHe7EWi
          stance: supports
          locator: CBDB:201113
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201113）
          source: &a1
            id: s_dRUGmqCaBFkV5AhXHe7EWi
            source_type: api_record
            title: 中国历代人物传记资料库：王朝佐（CBDB 201113）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201113&o=json
            external_identifier: CBDB:201113
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.654Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_3ApBWjA4esZm3u2pzKPxps
        subject_person_id: p_C41sWozjac1HZPEX2SGUgJ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1466年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EWyZbk4eVihd6UGzgJ85Co
          claim_id: c_3ApBWjA4esZm3u2pzKPxps
          source_id: s_dRUGmqCaBFkV5AhXHe7EWi
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
        id: c_tAypr66e2j3cjWa6ZWSijd
        subject_person_id: p_C41sWozjac1HZPEX2SGUgJ
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
        - id: cs_72Nvidddb6dZ7BKrrNGJUT
          claim_id: c_tAypr66e2j3cjWa6ZWSijd
          source_id: s_dRUGmqCaBFkV5AhXHe7EWi
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
        id: c_J1KY0WvfI2FCUYZ8iMC8Dq
        subject_person_id: p_Y1J494C1wxoCGbqWhaRwAG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C41sWozjac1HZPEX2SGUgJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PZ0xky72oTdzQ1uAN-ZBMD
          claim_id: c_J1KY0WvfI2FCUYZ8iMC8Dq
          source_id: s_dRUGmqCaBFkV5AhXHe7EWi
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第二甲第四十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Y1J494C1wxoCGbqWhaRwAG
        status: active
        display_name: 王平生
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_iCucFT5-ZN-T4KFCDzbTbM
        subject_person_id: p_C41sWozjac1HZPEX2SGUgJ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_tEnE1FhNsW61uxMtFrPHQq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EpLh_yPjEKEZFCniuhtTMX
          claim_id: c_iCucFT5-ZN-T4KFCDzbTbM
          source_id: s_4nEb0JdxB4GysTqqu5WnZy
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第二甲第四十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4nEb0JdxB4GysTqqu5WnZy
            source_type: api_record
            title: 中国历代人物传记资料库：蔡氏(王朝佐妻)（CBDB 267257）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267257&o=json
            external_identifier: CBDB:267257
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_tEnE1FhNsW61uxMtFrPHQq
        status: active
        display_name: 蔡氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_0D3L_BiJDFQFX_MBHYivLX
        subject_person_id: p_eJ2p8jByLja8epc6npZaLy
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_C41sWozjac1HZPEX2SGUgJ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9jJUbTwwEqmIVR9kRHokug
          claim_id: c_0D3L_BiJDFQFX_MBHYivLX
          source_id: s_dRUGmqCaBFkV5AhXHe7EWi
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第二甲第四十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_eJ2p8jByLja8epc6npZaLy
        status: active
        display_name: 王守正
        merged_into_person_id: null
    - claim:
        id: c_f9TSY1DMmebSgWXRdih_OI
        subject_person_id: p_MS2BC7Md2q6hnAWb9KKCiV
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_C41sWozjac1HZPEX2SGUgJ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jxbkEugNCAMlrk1pukDOIf
          claim_id: c_f9TSY1DMmebSgWXRdih_OI
          source_id: s_dRUGmqCaBFkV5AhXHe7EWi
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第二甲第四十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MS2BC7Md2q6hnAWb9KKCiV
        status: active
        display_name: 王旻
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王朝佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝佐 | accepted |
| birth.date | 1466年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Y1J494C1wxoCGbqWhaRwAG | 王平生 | accepted |
| spouses | p_tEnE1FhNsW61uxMtFrPHQq | 蔡氏 | accepted |
| ancestors | p_eJ2p8jByLja8epc6npZaLy | 王守正 | accepted |
| ancestors | p_MS2BC7Md2q6hnAWb9KKCiV | 王旻 | accepted |

## 外部来源

- [中国历代人物传记资料库：蔡氏(王朝佐妻)（CBDB 267257）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267257&o=json)
- [中国历代人物传记资料库：王朝佐（CBDB 201113）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201113&o=json)
