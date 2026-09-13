---
schema: wang-person/v1
id: p_2HUXpkk9pxQEqgcQ9WG6J1
status: active
merged_into: null
display_name: 王時迪
cbdb_id: 212507
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GLG7JQ5rzKaqMvy6pHVehU
        subject_person_id: p_2HUXpkk9pxQEqgcQ9WG6J1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時迪，史料所见人物。本项目依据《中国历代人物传记资料库：王時迪（CBDB 212507）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs__Cto65j2_b-KnKtF0npTWk
          claim_id: c_GLG7JQ5rzKaqMvy6pHVehU
          source_id: s_XmZ9925Z2iSxUfFK4F1f2F
          stance: supports
          locator: CBDB:212507
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_XmZ9925Z2iSxUfFK4F1f2F
            source_type: api_record
            title: 中国历代人物传记资料库：王時迪（CBDB 212507）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212507&o=json
            external_identifier: CBDB:212507
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_A8PTKN8DFeYDaqQc2VKmpd
        subject_person_id: p_2HUXpkk9pxQEqgcQ9WG6J1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時迪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_K3yCbZJMJkG3wix9YhBoC4
          claim_id: c_A8PTKN8DFeYDaqQc2VKmpd
          source_id: s_XmZ9925Z2iSxUfFK4F1f2F
          stance: supports
          locator: CBDB:212507
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
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
        id: c_nKUB1pT-qHT8GFflCHosbp
        subject_person_id: p_2HUXpkk9pxQEqgcQ9WG6J1
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_A4DQB8jxPM4hHSSP72EbgN
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_igZgXWYhdg-iLDX4VpSfD2
          claim_id: c_nKUB1pT-qHT8GFflCHosbp
          source_id: s_fn8gqdmgeo5JPqtpGG2pZp
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第二甲第十八名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fn8gqdmgeo5JPqtpGG2pZp
            source_type: api_record
            title: 中国历代人物传记资料库：王任（CBDB 206037）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206037&o=json
            external_identifier: CBDB:206037
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.880Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_A4DQB8jxPM4hHSSP72EbgN
        status: active
        display_name: 王任
        merged_into_person_id: null
  other: []
---

# 王時迪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王時迪，史料所见人物。本项目依据《中国历代人物传记资料库：王時迪（CBDB 212507）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王時迪 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_A4DQB8jxPM4hHSSP72EbgN | 王任 | accepted |

## 外部来源

- [中国历代人物传记资料库：王任（CBDB 206037）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206037&o=json)
- [中国历代人物传记资料库：王時迪（CBDB 212507）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212507&o=json)
