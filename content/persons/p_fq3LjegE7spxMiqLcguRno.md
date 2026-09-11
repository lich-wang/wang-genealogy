---
schema: wang-person/v1
id: p_fq3LjegE7spxMiqLcguRno
status: active
merged_into: null
display_name: 王績
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZFmZ3ieKds4ZMDy38WBo6E
        subject_person_id: p_fq3LjegE7spxMiqLcguRno
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王績
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5rmEo6KiPT5apDW931Yo87
          claim_id: c_ZFmZ3ieKds4ZMDy38WBo6E
          source_id: s_Piqd6s17sNDCLgy7yi6wi4
          stance: supports
          locator: CBDB:198391
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198391）
          source: &a1
            id: s_Piqd6s17sNDCLgy7yi6wi4
            source_type: api_record
            title: 中国历代人物传记资料库：王績（CBDB 198391）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198391&o=json
            external_identifier: CBDB:198391
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.487Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_rQs6iD5Sv8c4EmcVtjuaMq
        subject_person_id: p_fq3LjegE7spxMiqLcguRno
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1430年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_urWrZYiERkGQjPDV1EnQ7K
          claim_id: c_rQs6iD5Sv8c4EmcVtjuaMq
          source_id: s_Piqd6s17sNDCLgy7yi6wi4
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
        id: c_DvJqGnDrCJD5UQDprryDdp
        subject_person_id: p_fq3LjegE7spxMiqLcguRno
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
        - id: cs_BzHZ2EKiziJmaCL1TaGao8
          claim_id: c_DvJqGnDrCJD5UQDprryDdp
          source_id: s_Piqd6s17sNDCLgy7yi6wi4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_xO6jP_VVxqTW1qBqGJehop
        subject_person_id: p_AsBzx2nQCYur1hztbo92mA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fq3LjegE7spxMiqLcguRno
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2rX5wh88aTpjTTXdVbXUWy
          claim_id: c_xO6jP_VVxqTW1qBqGJehop
          source_id: s_BzukugfTQ7VV27i8kJ9USy
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第五十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BzukugfTQ7VV27i8kJ9USy
            source_type: api_record
            title: 中国历代人物传记资料库：王敏（CBDB 266160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266160&o=json
            external_identifier: CBDB:266160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.718Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AsBzx2nQCYur1hztbo92mA
        status: active
        display_name: 王敏
        merged_into_person_id: null
    - claim:
        id: c_EGIp7W9Be_O-4828Xw18X9
        subject_person_id: p_c99FmWSZNQoUeyW6dwBrna
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fq3LjegE7spxMiqLcguRno
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HumG3fgGLMaxJnTwR8J9Iw
          claim_id: c_EGIp7W9Be_O-4828Xw18X9
          source_id: s_ALoGTWeD7yTc4oBNe5JF3G
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第五十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ALoGTWeD7yTc4oBNe5JF3G
            source_type: api_record
            title: 中国历代人物传记资料库：王九山（CBDB 266149）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266149&o=json
            external_identifier: CBDB:266149
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_c99FmWSZNQoUeyW6dwBrna
        status: active
        display_name: 王九山
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王績

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王績 | accepted |
| birth.date | 1430年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_AsBzx2nQCYur1hztbo92mA | 王敏 | accepted |
| ancestors | p_c99FmWSZNQoUeyW6dwBrna | 王九山 | accepted |

## 外部来源

- [中国历代人物传记资料库：王績（CBDB 198391）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198391&o=json)
- [中国历代人物传记资料库：王九山（CBDB 266149）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266149&o=json)
- [中国历代人物传记资料库：王敏（CBDB 266160）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266160&o=json)
