---
schema: wang-person/v1
id: p_wPJ4doSTnrjoY9EGtNdvvR
status: active
merged_into: null
display_name: 王崑山
cbdb_id: 517445
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_z4Eb3sC4tkFgF6MrQotj92
        subject_person_id: p_wPJ4doSTnrjoY9EGtNdvvR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崑山，史料所见人物。本项目依据《中国历代人物传记资料库：王崑山（CBDB 517445）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_Wi0sF3jWZ9xqEOcnpk51nc
          claim_id: c_z4Eb3sC4tkFgF6MrQotj92
          source_id: s_b1mpRwJNSac3MyEeWeCGeQ
          stance: supports
          locator: CBDB:517445
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_b1mpRwJNSac3MyEeWeCGeQ
            source_type: api_record
            title: 中国历代人物传记资料库：王崑山（CBDB 517445）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517445&o=json
            external_identifier: CBDB:517445
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_hSN4pmj8snaJbDomXWN9Yi
        subject_person_id: p_wPJ4doSTnrjoY9EGtNdvvR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崑山
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_VG776PfH7gDYR9vBxxLkfK
          claim_id: c_hSN4pmj8snaJbDomXWN9Yi
          source_id: s_b1mpRwJNSac3MyEeWeCGeQ
          stance: supports
          locator: CBDB:517445
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6901-7000）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_BgGVuliF0cyVwblTeRVBAD
        subject_person_id: p_a6FwUZ9KfceY68ts48gFXx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wPJ4doSTnrjoY9EGtNdvvR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fPmiScVPUk74M7kK8IUEPc
          claim_id: c_BgGVuliF0cyVwblTeRVBAD
          source_id: s_6HZ4GospCCVDfz1VrjpR7Y
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1892：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6HZ4GospCCVDfz1VrjpR7Y
            source_type: api_record
            title: 中国历代人物传记资料库：王錦繡（CBDB 58630）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58630&o=json
            external_identifier: CBDB:58630
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:05.401Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_a6FwUZ9KfceY68ts48gFXx
        status: active
        display_name: 王錦繡
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王崑山

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王崑山，史料所见人物。本项目依据《中国历代人物传记资料库：王崑山（CBDB 517445）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王崑山 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_a6FwUZ9KfceY68ts48gFXx | 王錦繡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王錦繡（CBDB 58630）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58630&o=json)
- [中国历代人物传记资料库：王崑山（CBDB 517445）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517445&o=json)
