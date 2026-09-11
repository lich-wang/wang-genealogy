---
schema: wang-person/v1
id: p_WP2TCGKdqkuWFjHVRTiLcW
status: active
merged_into: null
display_name: 王志堅
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_X4Cib5z789DdhduN3fPyia
        subject_person_id: p_WP2TCGKdqkuWFjHVRTiLcW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志堅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FnbnJQUsnhNv4HqQ3KazJG
          claim_id: c_X4Cib5z789DdhduN3fPyia
          source_id: s_xsF6REjiRBUCa2YzLNGC5H
          stance: supports
          locator: CBDB:126537
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126537）
          source: &a1
            id: s_xsF6REjiRBUCa2YzLNGC5H
            source_type: api_record
            title: 中国历代人物传记资料库：王志堅（CBDB 126537）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126537&o=json
            external_identifier: CBDB:126537
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.008Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_d45hoanvMVPn7GM1UV8C56
        subject_person_id: p_WP2TCGKdqkuWFjHVRTiLcW
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1576年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HBw268383m6z37UGaCx5WU
          claim_id: c_d45hoanvMVPn7GM1UV8C56
          source_id: s_xsF6REjiRBUCa2YzLNGC5H
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_15zEHEh2YEnHZPMd4nenFi
        subject_person_id: p_WP2TCGKdqkuWFjHVRTiLcW
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1633年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3Q8B55McNZJNiEXt3CdVXB
          claim_id: c_15zEHEh2YEnHZPMd4nenFi
          source_id: s_xsF6REjiRBUCa2YzLNGC5H
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_P7Ffs5d74Kou1BvLwCa3Q3
        subject_person_id: p_WP2TCGKdqkuWFjHVRTiLcW
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
        - id: cs_jqoRN4MqH1cMwFsZkm6AL4
          claim_id: c_P7Ffs5d74Kou1BvLwCa3Q3
          source_id: s_xsF6REjiRBUCa2YzLNGC5H
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c__2ri04Y6waX5KUitke3vdd
        subject_person_id: p_WP2TCGKdqkuWFjHVRTiLcW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3DFKdwT8J87L9D41FmCZHV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6xLMs2hMom3DrCabCTPoTf
          claim_id: c__2ri04Y6waX5KUitke3vdd
          source_id: s_x26kLLVasxKXVf5WC5eTYm
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第二甲第五十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_x26kLLVasxKXVf5WC5eTYm
            source_type: api_record
            title: 中国历代人物传记资料库：王伸（CBDB 235164）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235164&o=json
            external_identifier: CBDB:235164
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.753Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3DFKdwT8J87L9D41FmCZHV
        status: active
        display_name: 王伸
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_lypfC9fsyDhbdOV1wAfvht
        subject_person_id: p_4JGDXd2PVCbJXStDWXhdLE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_WP2TCGKdqkuWFjHVRTiLcW
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nqlz4RmN-88jMJD_wxY_q8
          claim_id: c_lypfC9fsyDhbdOV1wAfvht
          source_id: s_jYfXMyb77HqGo4eb96wLP7
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第二甲第五十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jYfXMyb77HqGo4eb96wLP7
            source_type: api_record
            title: 中国历代人物传记资料库：王三錫（CBDB 235147）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235147&o=json
            external_identifier: CBDB:235147
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.750Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4JGDXd2PVCbJXStDWXhdLE
        status: active
        display_name: 王三錫
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王志堅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王志堅 | accepted |
| birth.date | 1576年 | accepted |
| death.date | 1633年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_3DFKdwT8J87L9D41FmCZHV | 王伸 | accepted |
| ancestors | p_4JGDXd2PVCbJXStDWXhdLE | 王三錫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王三錫（CBDB 235147）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235147&o=json)
- [中国历代人物传记资料库：王伸（CBDB 235164）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235164&o=json)
- [中国历代人物传记资料库：王志堅（CBDB 126537）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126537&o=json)
