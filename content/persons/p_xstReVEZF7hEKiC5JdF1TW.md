---
schema: wang-person/v1
id: p_xstReVEZF7hEKiC5JdF1TW
status: active
merged_into: null
display_name: 王八娘
cbdb_id: 156471
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jTJhnWuYDPTJPgsWW7zrjU
        subject_person_id: p_xstReVEZF7hEKiC5JdF1TW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王八娘，史料所见人物。本项目依据《中国历代人物传记资料库：王八娘（CBDB 156471）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_EQ3Sm1NdE8tTRAX2gTCQw1
          claim_id: c_jTJhnWuYDPTJPgsWW7zrjU
          source_id: s_NdbC1zcrNvSJiU8tNJMgt9
          stance: supports
          locator: CBDB:156471
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_NdbC1zcrNvSJiU8tNJMgt9
            source_type: api_record
            title: 中国历代人物传记资料库：王八娘（CBDB 156471）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156471&o=json
            external_identifier: CBDB:156471
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Eodff5w1gsr6zfGBLyXAEA
        subject_person_id: p_xstReVEZF7hEKiC5JdF1TW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王八娘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_rx2CWsY294bn9cPT94EpSs
          claim_id: c_Eodff5w1gsr6zfGBLyXAEA
          source_id: s_NdbC1zcrNvSJiU8tNJMgt9
          stance: supports
          locator: CBDB:156471
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2201-2300）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1ptblbLPxIJOeNbqhAA7nT
        subject_person_id: p_2KfZ4qZPoW4uxG2E5viFAA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xstReVEZF7hEKiC5JdF1TW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qHkXhCXzV6FquOG8uhrKAS
          claim_id: c_1ptblbLPxIJOeNbqhAA7nT
          source_id: s_NdbC1zcrNvSJiU8tNJMgt9
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yuanhe 34：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NdbC1zcrNvSJiU8tNJMgt9
            source_type: api_record
            title: 中国历代人物传记资料库：王八娘（CBDB 156471）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156471&o=json
            external_identifier: CBDB:156471
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_2KfZ4qZPoW4uxG2E5viFAA
        status: active
        display_name: 王大劍
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王八娘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王八娘，史料所见人物。本项目依据《中国历代人物传记资料库：王八娘（CBDB 156471）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王八娘 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2KfZ4qZPoW4uxG2E5viFAA | 王大劍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王八娘（CBDB 156471）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156471&o=json)
