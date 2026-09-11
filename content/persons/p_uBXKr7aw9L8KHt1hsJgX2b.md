---
schema: wang-person/v1
id: p_uBXKr7aw9L8KHt1hsJgX2b
status: active
merged_into: null
display_name: 王瑄
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DX3WMoKWeQuFyoNMdKHEfP
        subject_person_id: p_uBXKr7aw9L8KHt1hsJgX2b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wLZD9FH7HgK1VTVMvMgFQF
          claim_id: c_DX3WMoKWeQuFyoNMdKHEfP
          source_id: s_3yKRKXEfMPx8749Z59zVvE
          stance: supports
          locator: CBDB:265221
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（265221）
          source: &a1
            id: s_3yKRKXEfMPx8749Z59zVvE
            source_type: api_record
            title: 中国历代人物传记资料库：王瑄（CBDB 265221）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265221&o=json
            external_identifier: CBDB:265221
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.677Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2s2erPEND42Dq8d5bdCtVP
        subject_person_id: p_uBXKr7aw9L8KHt1hsJgX2b
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑄，明人物。弘治六年進士。（中国历代人物传记资料库 CBDB 265221）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dHW2k_rqbd8zTTQ6vLTvvI
          claim_id: c_2s2erPEND42Dq8d5bdCtVP
          source_id: s_3yKRKXEfMPx8749Z59zVvE
          stance: supports
          locator: CBDB:265221
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_uzLZuMknesdCb3ief1vNuw
        subject_person_id: p_uBXKr7aw9L8KHt1hsJgX2b
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5vDjPyewsQNr1vDc9fypfb
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EOVFYhD7JmnU3bGYRRM9H3
          claim_id: c_uzLZuMknesdCb3ief1vNuw
          source_id: s_SG9XzYnQAGNaRPC96Wixq5
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第五十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_SG9XzYnQAGNaRPC96Wixq5
            source_type: api_record
            title: 中国历代人物传记资料库：王時（CBDB 200965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200965&o=json
            external_identifier: CBDB:200965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.646Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5vDjPyewsQNr1vDc9fypfb
        status: active
        display_name: 王時
        merged_into_person_id: null
  other: []
---

# 王瑄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑄 | accepted |
| bio.summary | 王瑄，明人物。弘治六年進士。（中国历代人物传记资料库 CBDB 265221） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_5vDjPyewsQNr1vDc9fypfb | 王時 | accepted |

## 外部来源

- [中国历代人物传记资料库：王時（CBDB 200965）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200965&o=json)
- [中国历代人物传记资料库：王瑄（CBDB 265221）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265221&o=json)
