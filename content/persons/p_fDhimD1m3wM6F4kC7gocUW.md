---
schema: wang-person/v1
id: p_fDhimD1m3wM6F4kC7gocUW
status: active
merged_into: null
display_name: 王溥
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NQNMXizGtKR2iAvUtcHbfh
        subject_person_id: p_fDhimD1m3wM6F4kC7gocUW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kiPjGr1bucHSdMd66KzD6c
          claim_id: c_NQNMXizGtKR2iAvUtcHbfh
          source_id: s_S7X7GeP8bWcnwLmVZxa1s6
          stance: supports
          locator: CBDB:694296
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（694296）
          source: &a1
            id: s_S7X7GeP8bWcnwLmVZxa1s6
            source_type: api_record
            title: 中国历代人物传记资料库：王溥（CBDB 694296）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694296&o=json
            external_identifier: CBDB:694296
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.670Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MYCcHjfts1ssqi54yNeGsb
        subject_person_id: p_fDhimD1m3wM6F4kC7gocUW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王溥，清人物。籍贯海鹽，入仕貢生: 歲貢、常貢、挨貢，曾任訓導。（中国历代人物传记资料库 CBDB 694296）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_700Z2ydPuJlYLD8nzhEh4O
          claim_id: c_MYCcHjfts1ssqi54yNeGsb
          source_id: s_S7X7GeP8bWcnwLmVZxa1s6
          stance: supports
          locator: CBDB:694296
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HXJ-r1yFL27xfsSdPmxCkM
        subject_person_id: p_qzRDrqjW6BFLYhMP3xVCXP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fDhimD1m3wM6F4kC7gocUW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M9dm0qhcTPmcByvamp3QlP
          claim_id: c_HXJ-r1yFL27xfsSdPmxCkM
          source_id: s_S7X7GeP8bWcnwLmVZxa1s6
          stance: supports
          locator: "海鹽縣志: 二十二卷(光緒)，lgid=294038：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qzRDrqjW6BFLYhMP3xVCXP
        status: active
        display_name: 王尙志
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王溥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王溥 | accepted |
| bio.summary | 王溥，清人物。籍贯海鹽，入仕貢生: 歲貢、常貢、挨貢，曾任訓導。（中国历代人物传记资料库 CBDB 694296） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qzRDrqjW6BFLYhMP3xVCXP | 王尙志 | accepted |

## 外部来源

- [中国历代人物传记资料库：王溥（CBDB 694296）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694296&o=json)
