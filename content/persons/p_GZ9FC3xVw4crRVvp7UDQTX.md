---
schema: wang-person/v1
id: p_GZ9FC3xVw4crRVvp7UDQTX
status: active
merged_into: null
display_name: 王玭
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MQgrfHyWhCuKmkBFyFFadZ
        subject_person_id: p_GZ9FC3xVw4crRVvp7UDQTX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J7WLEL4MP7ThBK29yJg9Pf
          claim_id: c_MQgrfHyWhCuKmkBFyFFadZ
          source_id: s_WNKpdkk3yi4awpd41NnU58
          stance: supports
          locator: CBDB:208155
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（208155）
          source: &a1
            id: s_WNKpdkk3yi4awpd41NnU58
            source_type: api_record
            title: 中国历代人物传记资料库：王玭（CBDB 208155）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208155&o=json
            external_identifier: CBDB:208155
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.949Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_759G2Vzw8EEVjRXvXGtCK6
        subject_person_id: p_GZ9FC3xVw4crRVvp7UDQTX
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1417年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XfHhScUBaUXJugQFes2L2u
          claim_id: c_759G2Vzw8EEVjRXvXGtCK6
          source_id: s_WNKpdkk3yi4awpd41NnU58
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
        id: c_3q3xAMZocBdRvdDV8UuGQw
        subject_person_id: p_GZ9FC3xVw4crRVvp7UDQTX
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
        - id: cs_Ts8BQJW1CA1JoEBDphSUBQ
          claim_id: c_3q3xAMZocBdRvdDV8UuGQw
          source_id: s_WNKpdkk3yi4awpd41NnU58
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
        id: c_HS-oqMnMiv_ZOxh_tDQIHW
        subject_person_id: p_6Tbz6rZoK81ZB5BwdE41k7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GZ9FC3xVw4crRVvp7UDQTX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wvd-IXCFleVIJZWcFQZpry
          claim_id: c_HS-oqMnMiv_ZOxh_tDQIHW
          source_id: s_WNKpdkk3yi4awpd41NnU58
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第六十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_6Tbz6rZoK81ZB5BwdE41k7
        status: active
        display_name: 王興弼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_1zHiNnAtURpDwLysWfsXc-
        subject_person_id: p_EPVRDWZKonkLB1kZwcARVu
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GZ9FC3xVw4crRVvp7UDQTX
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_erzil1uLF9uNRmeo-x9JVH
          claim_id: c_1zHiNnAtURpDwLysWfsXc-
          source_id: s_WNKpdkk3yi4awpd41NnU58
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第六十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EPVRDWZKonkLB1kZwcARVu
        status: active
        display_name: 王顯德
        merged_into_person_id: null
    - claim:
        id: c_lcCeMVBgveUNZzDX9eJaHT
        subject_person_id: p_kMQhT3dQbTnh3GYgpMAAPK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GZ9FC3xVw4crRVvp7UDQTX
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PTSJeaAhv-aLqxJTQF2Xo1
          claim_id: c_lcCeMVBgveUNZzDX9eJaHT
          source_id: s_WNKpdkk3yi4awpd41NnU58
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第六十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kMQhT3dQbTnh3GYgpMAAPK
        status: active
        display_name: 王保民
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王玭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玭 | accepted |
| birth.date | 1417年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6Tbz6rZoK81ZB5BwdE41k7 | 王興弼 | accepted |
| ancestors | p_EPVRDWZKonkLB1kZwcARVu | 王顯德 | accepted |
| ancestors | p_kMQhT3dQbTnh3GYgpMAAPK | 王保民 | accepted |

## 外部来源

- [中国历代人物传记资料库：王玭（CBDB 208155）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208155&o=json)
