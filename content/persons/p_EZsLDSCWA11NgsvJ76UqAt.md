---
schema: wang-person/v1
id: p_EZsLDSCWA11NgsvJ76UqAt
status: active
merged_into: null
display_name: 王孟晚
cbdb_id: 228580
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bGDMPbczW5UbiN5c9jNp3u
        subject_person_id: p_EZsLDSCWA11NgsvJ76UqAt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟晚，明人物。萬曆丙戌科進士進士，籍贯安邱。（中国历代人物传记资料库 CBDB 228580）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_25-EdZ6ZLKKkqVQDX1ubnN
          claim_id: c_bGDMPbczW5UbiN5c9jNp3u
          source_id: s_yBRRs2rdQzSavoZDVoddAH
          stance: supports
          locator: CBDB:228580
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_yBRRs2rdQzSavoZDVoddAH
            source_type: api_record
            title: 中国历代人物传记资料库：王孟晚（CBDB 228580）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228580&o=json
            external_identifier: CBDB:228580
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8hWeAN8zWAFNozYGiFADRC
        subject_person_id: p_EZsLDSCWA11NgsvJ76UqAt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟晚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_QmnR3wrJjJKRqijXGMpFGg
          claim_id: c_8hWeAN8zWAFNozYGiFADRC
          source_id: s_yBRRs2rdQzSavoZDVoddAH
          stance: supports
          locator: CBDB:228580
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dZnr02FqDx1ZPPXcoYnxeB
        subject_person_id: p_xAnhmoVcnedrkYag8SmuS8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EZsLDSCWA11NgsvJ76UqAt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8TPgJKFBc56hHcJKIpUZ-z
          claim_id: c_dZnr02FqDx1ZPPXcoYnxeB
          source_id: s_p17hvwPeG4aO5q6Ghmz13d
          stance: supports
          locator: CBDB：兄弟 王孟煦（207153）之父／母 王士瑤
          quotation: null
          interpretation_note: 由兄弟关系推断：王孟晚 与 王孟煦 为同胞（CBDB 记「兄」），王孟煦 之父／母即 王孟晚 之父／母。
          source:
            id: s_p17hvwPeG4aO5q6Ghmz13d
            source_type: api_record
            title: 中国历代人物传记资料库：王孟晚（CBDB 228580）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228580&o=json
            external_identifier: CBDB:228580
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xAnhmoVcnedrkYag8SmuS8
        status: active
        display_name: 王士瑤
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_WwhlAsoMezScOltX9I3OAx
        subject_person_id: p_EZsLDSCWA11NgsvJ76UqAt
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Z1sXa1thNM94WHiooGYHug
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mwHqWlJt26RQib6O44CCzQ
          claim_id: c_WwhlAsoMezScOltX9I3OAx
          source_id: s_p17hvwPeG4aO5q6Ghmz13d
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207153 王孟煦）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_p17hvwPeG4aO5q6Ghmz13d
            source_type: api_record
            title: 中国历代人物传记资料库：王孟晚（CBDB 228580）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228580&o=json
            external_identifier: CBDB:228580
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Z1sXa1thNM94WHiooGYHug
        status: active
        display_name: 王孟煦
        merged_into_person_id: null
---

# 王孟晚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王孟晚，明人物。萬曆丙戌科進士進士，籍贯安邱。（中国历代人物传记资料库 CBDB 228580） | accepted |
| name.primary | 王孟晚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xAnhmoVcnedrkYag8SmuS8 | 王士瑤 | accepted |
| other | p_Z1sXa1thNM94WHiooGYHug | 王孟煦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王孟晚（CBDB 228580）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228580&o=json)
