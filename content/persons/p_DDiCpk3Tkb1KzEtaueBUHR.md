---
schema: wang-person/v1
id: p_DDiCpk3Tkb1KzEtaueBUHR
status: active
merged_into: null
display_name: 王良
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_odPhTLWSAz3KHRFto8PEro
        subject_person_id: p_DDiCpk3Tkb1KzEtaueBUHR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9f3Yj1F3Gjao7usWHBs3Dx
          claim_id: c_odPhTLWSAz3KHRFto8PEro
          source_id: s_E3vewXoKnDWAG9cLpJ5k9H
          stance: supports
          locator: CBDB:277195
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（277195）
          source: &a1
            id: s_E3vewXoKnDWAG9cLpJ5k9H
            source_type: api_record
            title: 中国历代人物传记资料库：王良（CBDB 277195）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277195&o=json
            external_identifier: CBDB:277195
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.956Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ch2ujEYAf9R8TdH1cBSmHT
        subject_person_id: p_DDiCpk3Tkb1KzEtaueBUHR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良，明人物。正德六年進士，籍贯當塗，曾任義官。（中国历代人物传记资料库 CBDB 277195）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_w3Yzig1ueagPnrE26KUR4Z
          claim_id: c_Ch2ujEYAf9R8TdH1cBSmHT
          source_id: s_E3vewXoKnDWAG9cLpJ5k9H
          stance: supports
          locator: CBDB:277195
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_e6U9GBhjRt5cMHqDDKA7h1
        subject_person_id: p_DDiCpk3Tkb1KzEtaueBUHR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dC2kXoLn9HGUMNL9QippS6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pv8eNTzLFfDIH4YzCbHrB4
          claim_id: c_e6U9GBhjRt5cMHqDDKA7h1
          source_id: s_PJTTnFj5euNLKj7gS9owGb
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第二十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PJTTnFj5euNLKj7gS9owGb
            source_type: api_record
            title: 中国历代人物传记资料库：王瑋（CBDB 201725）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201725&o=json
            external_identifier: CBDB:201725
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.691Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dC2kXoLn9HGUMNL9QippS6
        status: active
        display_name: 王瑋
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王良

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王良 | accepted |
| bio.summary | 王良，明人物。正德六年進士，籍贯當塗，曾任義官。（中国历代人物传记资料库 CBDB 277195） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_dC2kXoLn9HGUMNL9QippS6 | 王瑋 | accepted |

## 外部来源

- [中国历代人物传记资料库：王良（CBDB 277195）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277195&o=json)
- [中国历代人物传记资料库：王瑋（CBDB 201725）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201725&o=json)
