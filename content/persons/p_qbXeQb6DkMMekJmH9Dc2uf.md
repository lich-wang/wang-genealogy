---
schema: wang-person/v1
id: p_qbXeQb6DkMMekJmH9Dc2uf
status: active
merged_into: null
display_name: 王長述
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JEkhU5RtkC1z81vmW3rYT9
        subject_person_id: p_qbXeQb6DkMMekJmH9Dc2uf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王長述
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D1fMmCF7shntj9ubhCQzc8
          claim_id: c_JEkhU5RtkC1z81vmW3rYT9
          source_id: s_nYnm7N61Z8Mp1jBMbmZBG7
          stance: supports
          locator: CBDB:415569
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（415569）
          source: &a1
            id: s_nYnm7N61Z8Mp1jBMbmZBG7
            source_type: api_record
            title: 中国历代人物传记资料库：王長述（CBDB 415569）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415569&o=json
            external_identifier: CBDB:415569
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.028Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3wWBbxahMUC72Ja2qGTTAZ
        subject_person_id: p_qbXeQb6DkMMekJmH9Dc2uf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王長述，京兆霸城人，魏太尉王羆之孫，父王慶遠。北周、隋名臣，歷中書舍人、晉州刺史、玉壁總管，入隋拜信州總管、行軍總管，封龍門郡公（《隋書·王長述傳》）。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Pp9YQ3jVnMIp1t5mJuRVl7
          claim_id: c_3wWBbxahMUC72Ja2qGTTAZ
          source_id: s_DbVF6qG9OIXfCq3XCG6crC
          stance: supports
          locator: 隋書/卷54·王長述傳
          quotation: null
          interpretation_note: 依正史列传原文重写简介。
          source:
            id: s_DbVF6qG9OIXfCq3XCG6crC
            source_type: website
            title: 维基文库：隋書/卷54·王長述
            creator: 维基文库贡献者
            publisher: 维基媒体基金会
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/隋書/卷54
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-14T02:01:15.894Z
            metadata_json: null
        - id: cs_s5huEBOIU-MvoljkGfgPyJ
          claim_id: c_3wWBbxahMUC72Ja2qGTTAZ
          source_id: s_nYnm7N61Z8Mp1jBMbmZBG7
          stance: supports
          locator: CBDB:415569
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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
  descendants: []
  other: []
---

# 王長述

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王長述 | accepted |
| bio.summary | 王長述，京兆霸城人，魏太尉王羆之孫，父王慶遠。北周、隋名臣，歷中書舍人、晉州刺史、玉壁總管，入隋拜信州總管、行軍總管，封龍門郡公（《隋書·王長述傳》）。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基文库：隋書/卷54·王長述](https://zh.wikisource.org/wiki/隋書/卷54)
- [中国历代人物传记资料库：王長述（CBDB 415569）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415569&o=json)
