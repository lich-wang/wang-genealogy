---
schema: wang-person/v1
id: p_pG5WKV3i6pashNpAeCVJkC
status: active
merged_into: null
display_name: 王長治
cbdb_id: 120502
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SP6Gh2mQTydStU18McYqHu
        subject_person_id: p_pG5WKV3i6pashNpAeCVJkC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王長治，史料所见人物。本项目依据《中国历代人物传记资料库：王長治（CBDB 120502）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_QmIcovq-edVT9UMb6E8Tkd
          claim_id: c_SP6Gh2mQTydStU18McYqHu
          source_id: s_gFmfoSpoDKeFPH272tXqwE
          stance: supports
          locator: CBDB:120502
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_gFmfoSpoDKeFPH272tXqwE
            source_type: api_record
            title: 中国历代人物传记资料库：王長治（CBDB 120502）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120502&o=json
            external_identifier: CBDB:120502
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_AeTEmRRg3BLZj7hqKk6yXB
        subject_person_id: p_pG5WKV3i6pashNpAeCVJkC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王長治
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_njhKvbKQG2rLxuwLmqTvK2
          claim_id: c_AeTEmRRg3BLZj7hqKk6yXB
          source_id: s_gFmfoSpoDKeFPH272tXqwE
          stance: supports
          locator: CBDB:120502
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1901-2000）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_sntbmXPTlZBaj8aKtBqSFl
        subject_person_id: p_pG5WKV3i6pashNpAeCVJkC
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_4pN98PGfPvKYv2EA9NFycp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XzgioDpe8NoBq29afyNa8V
          claim_id: c_sntbmXPTlZBaj8aKtBqSFl
          source_id: s_7uvfJLwHWWPfTzPcZkWo9q
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3656, HuWenKai #270：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7uvfJLwHWWPfTzPcZkWo9q
            source_type: api_record
            title: 中国历代人物传记资料库：石錦繡（CBDB 120523）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120523&o=json
            external_identifier: CBDB:120523
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4pN98PGfPvKYv2EA9NFycp
        status: active
        display_name: 石錦繡
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王長治

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王長治，史料所见人物。本项目依据《中国历代人物传记资料库：王長治（CBDB 120502）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王長治 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_4pN98PGfPvKYv2EA9NFycp | 石錦繡 | accepted |

## 外部来源

- [中国历代人物传记资料库：石錦繡（CBDB 120523）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120523&o=json)
- [中国历代人物传记资料库：王長治（CBDB 120502）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120502&o=json)
