---
schema: wang-person/v1
id: p_ShbQcKbhPZJtYL14xZXyTR
status: active
merged_into: null
display_name: 王佩
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sW5HGfEVQ5UQPP1Y3pyyuD
        subject_person_id: p_ShbQcKbhPZJtYL14xZXyTR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CvvRRvvfr85ZuXVYrURc1E
          claim_id: c_sW5HGfEVQ5UQPP1Y3pyyuD
          source_id: s_wm2ikfL3duojoSSPK4pyUC
          stance: supports
          locator: CBDB:202809
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202809）
          source: &a1
            id: s_wm2ikfL3duojoSSPK4pyUC
            source_type: api_record
            title: 中国历代人物传记资料库：王佩（CBDB 202809）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202809&o=json
            external_identifier: CBDB:202809
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.757Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_R8393u9V6557EWTShpuBbv
        subject_person_id: p_ShbQcKbhPZJtYL14xZXyTR
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1499年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1VvAMdhg7vvwP7HzAFDFQb
          claim_id: c_R8393u9V6557EWTShpuBbv
          source_id: s_wm2ikfL3duojoSSPK4pyUC
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
        id: c_bCAEUZZD6v5ZCW4dyzTQfo
        subject_person_id: p_ShbQcKbhPZJtYL14xZXyTR
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
        - id: cs_m2M53WMRxXr7PxHwS8yBfj
          claim_id: c_bCAEUZZD6v5ZCW4dyzTQfo
          source_id: s_wm2ikfL3duojoSSPK4pyUC
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
        id: c_fRXUHSyGtBaF-bL5ACyknY
        subject_person_id: p_cDjtDCi8h6mSG4Cms93AKT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ShbQcKbhPZJtYL14xZXyTR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JgE5ADHUh6omf2-6fLJ6gn
          claim_id: c_fRXUHSyGtBaF-bL5ACyknY
          source_id: s_sC1ZqLTT81hUx4vovz4x5G
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百三十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_sC1ZqLTT81hUx4vovz4x5G
            source_type: api_record
            title: 中国历代人物传记资料库：王深（CBDB 294953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294953&o=json
            external_identifier: CBDB:294953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.483Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cDjtDCi8h6mSG4Cms93AKT
        status: active
        display_name: 王深
        merged_into_person_id: null
  children:
    - claim:
        id: c_sTspnGh5ZLmDsH_4kfnhBe
        subject_person_id: p_ShbQcKbhPZJtYL14xZXyTR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bxhtYQ9E8JH99TgLXQgD1K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sJEsLo32QiXsfOUNgoqyOL
          claim_id: c_sTspnGh5ZLmDsH_4kfnhBe
          source_id: s_2BQQQuAJbNuujs3BEbjUXw
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百三十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2BQQQuAJbNuujs3BEbjUXw
            source_type: api_record
            title: 中国历代人物传记资料库：王惟幾（CBDB 294964）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294964&o=json
            external_identifier: CBDB:294964
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.485Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bxhtYQ9E8JH99TgLXQgD1K
        status: active
        display_name: 王惟幾
        merged_into_person_id: null
    - claim:
        id: c_A3w1KftfTd1WgQL290CinE
        subject_person_id: p_ShbQcKbhPZJtYL14xZXyTR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_w39jjd3JxxSiu1jw1L8DFd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kbbw_tTyLBxGbnUX_JrW75
          claim_id: c_A3w1KftfTd1WgQL290CinE
          source_id: s_NugpXN1hXqAaJE8FxaxG1C
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百三十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NugpXN1hXqAaJE8FxaxG1C
            source_type: api_record
            title: 中国历代人物传记资料库：王惟玄（CBDB 294965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294965&o=json
            external_identifier: CBDB:294965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.485Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_w39jjd3JxxSiu1jw1L8DFd
        status: active
        display_name: 王惟玄
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_eFbt9BWPYmoaBZLPRKl6F6
        subject_person_id: p_YSNbFAUDK8xiiXfhU6tQEw
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ShbQcKbhPZJtYL14xZXyTR
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7uclxg5OhitLihNE3Po-ic
          claim_id: c_eFbt9BWPYmoaBZLPRKl6F6
          source_id: s_frrPLFFU4ucpeDwcuWewC9
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百三十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_frrPLFFU4ucpeDwcuWewC9
            source_type: api_record
            title: 中国历代人物传记资料库：王翺（CBDB 294952）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294952&o=json
            external_identifier: CBDB:294952
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.482Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_YSNbFAUDK8xiiXfhU6tQEw
        status: active
        display_name: 王翺
        merged_into_person_id: null
    - claim:
        id: c_Rtqco8g_rrRAzNLDPM43c0
        subject_person_id: p_zsDXFxFD1wGKxUmqu43tAu
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ShbQcKbhPZJtYL14xZXyTR
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NGqwHS4EdxzfyLIivf1ri_
          claim_id: c_Rtqco8g_rrRAzNLDPM43c0
          source_id: s_VbxPeyZuXpGU1oH9M5bvQQ
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百三十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VbxPeyZuXpGU1oH9M5bvQQ
            source_type: api_record
            title: 中国历代人物传记资料库：王輔（CBDB 294950）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294950&o=json
            external_identifier: CBDB:294950
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.482Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_zsDXFxFD1wGKxUmqu43tAu
        status: active
        display_name: 王輔
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_4djINIL1J6eG7KwIh3u1Pk
        subject_person_id: p_ShbQcKbhPZJtYL14xZXyTR
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_EuRd96THGYk3sKLAvBNXcu
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BWz6UwqLu8y_zpWjcVZazW
          claim_id: c_4djINIL1J6eG7KwIh3u1Pk
          source_id: s_9zqVDWCYtmKaFs87yCBPwo
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百三十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9zqVDWCYtmKaFs87yCBPwo
            source_type: api_record
            title: 中国历代人物传记资料库：王陞（CBDB 294967）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294967&o=json
            external_identifier: CBDB:294967
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.486Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EuRd96THGYk3sKLAvBNXcu
        status: active
        display_name: 王陞
        merged_into_person_id: null
  other: []
---

# 王佩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佩 | accepted |
| birth.date | 1499年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cDjtDCi8h6mSG4Cms93AKT | 王深 | accepted |
| children | p_bxhtYQ9E8JH99TgLXQgD1K | 王惟幾 | accepted |
| children | p_w39jjd3JxxSiu1jw1L8DFd | 王惟玄 | accepted |
| ancestors | p_YSNbFAUDK8xiiXfhU6tQEw | 王翺 | accepted |
| ancestors | p_zsDXFxFD1wGKxUmqu43tAu | 王輔 | accepted |
| descendants | p_EuRd96THGYk3sKLAvBNXcu | 王陞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王翺（CBDB 294952）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294952&o=json)
- [中国历代人物传记资料库：王輔（CBDB 294950）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294950&o=json)
- [中国历代人物传记资料库：王佩（CBDB 202809）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202809&o=json)
- [中国历代人物传记资料库：王深（CBDB 294953）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294953&o=json)
- [中国历代人物传记资料库：王陞（CBDB 294967）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294967&o=json)
- [中国历代人物传记资料库：王惟幾（CBDB 294964）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294964&o=json)
- [中国历代人物传记资料库：王惟玄（CBDB 294965）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294965&o=json)
