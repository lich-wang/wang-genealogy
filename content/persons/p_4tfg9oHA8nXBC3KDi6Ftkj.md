---
schema: wang-person/v1
id: p_4tfg9oHA8nXBC3KDi6Ftkj
status: active
merged_into: null
display_name: 王可大
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3KwWYo9RPZmz9G53gxUKDy
        subject_person_id: p_4tfg9oHA8nXBC3KDi6Ftkj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可大
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JGGNMRuvLL5sSY6BHoBZ1k
          claim_id: c_3KwWYo9RPZmz9G53gxUKDy
          source_id: s_33RLD1aJM1kGohTTTjF6wj
          stance: supports
          locator: CBDB:126483
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126483）
          source: &a1
            id: s_33RLD1aJM1kGohTTTjF6wj
            source_type: api_record
            title: 中国历代人物传记资料库：王可大（CBDB 126483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126483&o=json
            external_identifier: CBDB:126483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.982Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NAyery1NEvn97movLPffNG
        subject_person_id: p_4tfg9oHA8nXBC3KDi6Ftkj
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
        - id: cs_QJxAMMatygcCpQu416rAYq
          claim_id: c_NAyery1NEvn97movLPffNG
          source_id: s_33RLD1aJM1kGohTTTjF6wj
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
        id: c_xaJHtVgntSD6M7fMMUWbZ4
        subject_person_id: p_WtHSaGmBzhNmmSZGD4ByjL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4tfg9oHA8nXBC3KDi6Ftkj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SpHsv5epu0XnhlEM5TRStb
          claim_id: c_xaJHtVgntSD6M7fMMUWbZ4
          source_id: s_33RLD1aJM1kGohTTTjF6wj
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第二甲第八十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WtHSaGmBzhNmmSZGD4ByjL
        status: active
        display_name: 王鑾
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_1LshM5-3Q3O9IJDc1yyip6
        subject_person_id: p_4tfg9oHA8nXBC3KDi6Ftkj
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_4oNxBLtDrmgbfP63e2Frt6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jSa3KYEWMKU_fuVZpD2TwW
          claim_id: c_1LshM5-3Q3O9IJDc1yyip6
          source_id: s_mVkW2goondD2xT6pynbbUv
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第二甲第八十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mVkW2goondD2xT6pynbbUv
            source_type: api_record
            title: 中国历代人物传记资料库：朱氏(王可大妻)（CBDB 315815）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315815&o=json
            external_identifier: CBDB:315815
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4oNxBLtDrmgbfP63e2Frt6
        status: active
        display_name: 朱氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_UZUsuS1hwEDxUS3SQExcsa
        subject_person_id: p_w5C91WDSavr3ujcuxfQ8fs
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4tfg9oHA8nXBC3KDi6Ftkj
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X06judqrDFoacUu5Q3A7sx
          claim_id: c_UZUsuS1hwEDxUS3SQExcsa
          source_id: s_33RLD1aJM1kGohTTTjF6wj
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第二甲第八十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_w5C91WDSavr3ujcuxfQ8fs
        status: active
        display_name: 王信
        merged_into_person_id: null
    - claim:
        id: c_TAbF5KMUOYT0iOGngaGqEt
        subject_person_id: p_75UUBDKGozhsnJNXRNe48F
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4tfg9oHA8nXBC3KDi6Ftkj
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NIP8nxfab0aE8h3t2xWslG
          claim_id: c_TAbF5KMUOYT0iOGngaGqEt
          source_id: s_33RLD1aJM1kGohTTTjF6wj
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第二甲第八十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_75UUBDKGozhsnJNXRNe48F
        status: active
        display_name: 王閔
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_eaejoDTgjvtoI8YYI3NAzR
        subject_person_id: p_4tfg9oHA8nXBC3KDi6Ftkj
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_bkZEV7s5emg2XrT2FCzbqF
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ONsel2uq_peUZQ3aaVNWgf
          claim_id: c_eaejoDTgjvtoI8YYI3NAzR
          source_id: s_33RLD1aJM1kGohTTTjF6wj
          stance: supports
          locator: 江南通志，lgid=65689：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_bkZEV7s5emg2XrT2FCzbqF
        status: active
        display_name: 王萬禩
        merged_into_person_id: null
  other: []
---

# 王可大

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王可大 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WtHSaGmBzhNmmSZGD4ByjL | 王鑾 | accepted |
| spouses | p_4oNxBLtDrmgbfP63e2Frt6 | 朱氏 | accepted |
| ancestors | p_w5C91WDSavr3ujcuxfQ8fs | 王信 | accepted |
| ancestors | p_75UUBDKGozhsnJNXRNe48F | 王閔 | accepted |
| descendants | p_bkZEV7s5emg2XrT2FCzbqF | 王萬禩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王可大（CBDB 126483）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126483&o=json)
- [中国历代人物传记资料库：朱氏(王可大妻)（CBDB 315815）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315815&o=json)
