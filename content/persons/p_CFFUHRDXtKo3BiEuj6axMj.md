---
schema: wang-person/v1
id: p_CFFUHRDXtKo3BiEuj6axMj
status: active
merged_into: null
display_name: 王祺
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cy2MqVmP7UU746GD7HeLfv
        subject_person_id: p_CFFUHRDXtKo3BiEuj6axMj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9ZZPrzSgSrkvmvE3B24Vwz
          claim_id: c_cy2MqVmP7UU746GD7HeLfv
          source_id: s_6N3VpNWrcrFGJKECjdnx2n
          stance: supports
          locator: CBDB:212075
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（212075）
          source: &a1
            id: s_6N3VpNWrcrFGJKECjdnx2n
            source_type: api_record
            title: 中国历代人物传记资料库：王祺（CBDB 212075）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212075&o=json
            external_identifier: CBDB:212075
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.060Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YNVFW52RLqx8ZKFi5PkJGY
        subject_person_id: p_CFFUHRDXtKo3BiEuj6axMj
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
        - id: cs_GHXwZC4EQHJec4eKtfEn1K
          claim_id: c_YNVFW52RLqx8ZKFi5PkJGY
          source_id: s_6N3VpNWrcrFGJKECjdnx2n
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
  ancestors: []
  descendants:
    - claim:
        id: c_OMs-Iv3qjfNzppBKnLYLbF
        subject_person_id: p_CFFUHRDXtKo3BiEuj6axMj
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1XLNfRiDAQG1jeNLog7rHV
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aYR1QxHLdlrDGn8VXSfpMd
          claim_id: c_OMs-Iv3qjfNzppBKnLYLbF
          source_id: s_45JC3rMvbrBETLdFp221Ko
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百九十六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_45JC3rMvbrBETLdFp221Ko
            source_type: api_record
            title: 中国历代人物传记资料库：王煥（CBDB 206011）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206011&o=json
            external_identifier: CBDB:206011
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.878Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1XLNfRiDAQG1jeNLog7rHV
        status: active
        display_name: 王煥
        merged_into_person_id: null
  other: []
---

# 王祺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祺 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_1XLNfRiDAQG1jeNLog7rHV | 王煥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王煥（CBDB 206011）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206011&o=json)
- [中国历代人物传记资料库：王祺（CBDB 212075）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212075&o=json)
