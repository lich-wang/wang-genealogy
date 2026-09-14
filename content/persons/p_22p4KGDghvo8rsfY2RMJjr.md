---
schema: wang-person/v1
id: p_22p4KGDghvo8rsfY2RMJjr
status: active
merged_into: null
display_name: 王璋
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JKiFuyvoBByrEfxyRiyRy6
        subject_person_id: p_22p4KGDghvo8rsfY2RMJjr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_g3JoTMdrP7N3poKq42eNhP
          claim_id: c_JKiFuyvoBByrEfxyRiyRy6
          source_id: s_VtWVsVTSsbFTgHQ1gaDfzx
          stance: supports
          locator: CBDB:121461
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（121461）
          source: &a1
            id: s_VtWVsVTSsbFTgHQ1gaDfzx
            source_type: api_record
            title: 中国历代人物传记资料库：王璋（CBDB 121461）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121461&o=json
            external_identifier: CBDB:121461
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.915Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_p1Ezbn9wm86dXpf5df16LF
        subject_person_id: p_22p4KGDghvo8rsfY2RMJjr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璋，北宋初人，宋知京使王延德之祖，官至相州錄事參軍（《宋史·卷三百九·王延德傳》：祖璋，相州錄事參軍）。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_-HsqDGJfu868E2z3M7vFCr
          claim_id: c_p1Ezbn9wm86dXpf5df16LF
          source_id: s_0S-BpphDalxOQqhF3MV6pN
          stance: supports
          locator: 宋史/卷309·王璋
          quotation: null
          interpretation_note: 依正史传主列传中点名的亲属记载补写简介。
          source:
            id: s_0S-BpphDalxOQqhF3MV6pN
            source_type: website
            title: 维基文库：宋史/卷309·王璋
            creator: 维基文库贡献者
            publisher: 维基媒体基金会
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/宋史/卷309
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-14T02:14:35.000Z
            metadata_json: null
        - id: cs_mIWwR52iwqD3swenn7Zhpw
          claim_id: c_p1Ezbn9wm86dXpf5df16LF
          source_id: s_VtWVsVTSsbFTgHQ1gaDfzx
          stance: supports
          locator: CBDB:121461
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
  descendants:
    - claim:
        id: c_rRJbrAKSn3occvO2AE2ryA
        subject_person_id: p_22p4KGDghvo8rsfY2RMJjr
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_n18iFte87Ls38E8g6NHVog
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-tf6d3y1FQ-TPiMV7XBGuu
          claim_id: c_rRJbrAKSn3occvO2AE2ryA
          source_id: s_VtWVsVTSsbFTgHQ1gaDfzx
          stance: supports
          locator: 宋史：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_n18iFte87Ls38E8g6NHVog
        status: active
        display_name: 王延德
        merged_into_person_id: null
  other: []
---

# 王璋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璋 | accepted |
| bio.summary | 王璋，北宋初人，宋知京使王延德之祖，官至相州錄事參軍（《宋史·卷三百九·王延德傳》：祖璋，相州錄事參軍）。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_n18iFte87Ls38E8g6NHVog | 王延德 | accepted |

## 外部来源

- [维基文库：宋史/卷309·王璋](https://zh.wikisource.org/wiki/宋史/卷309)
- [中国历代人物传记资料库：王璋（CBDB 121461）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121461&o=json)
