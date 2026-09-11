---
schema: wang-person/v1
id: p_qwzu3ZKpNmFFiKcPJz3w4X
status: active
merged_into: null
display_name: 王景華
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WcTVSJgZ2sQqy9FxKf4A2v
        subject_person_id: p_qwzu3ZKpNmFFiKcPJz3w4X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DVjTrMnoxFt8nssRopPQs1
          claim_id: c_WcTVSJgZ2sQqy9FxKf4A2v
          source_id: s_9MEZw7q9xQRAMSvpXAkj91
          stance: supports
          locator: CBDB:320256
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（320256）
          source: &a1
            id: s_9MEZw7q9xQRAMSvpXAkj91
            source_type: api_record
            title: 中国历代人物传记资料库：王景華（CBDB 320256）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320256&o=json
            external_identifier: CBDB:320256
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.058Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NqCE2HF1XC47jC5ZMyEb9o
        subject_person_id: p_qwzu3ZKpNmFFiKcPJz3w4X
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景華，明人物。嘉靖三十五年進士。（中国历代人物传记资料库 CBDB 320256）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hMOoQnpsuBJn9PCmj7EOuF
          claim_id: c_NqCE2HF1XC47jC5ZMyEb9o
          source_id: s_9MEZw7q9xQRAMSvpXAkj91
          stance: supports
          locator: CBDB:320256
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
        id: c_dsYaM7JtDv-mjF9kof6cj1
        subject_person_id: p_qwzu3ZKpNmFFiKcPJz3w4X
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ACc1xBws7mA2Ao333iSn1t
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c8SY52SCJYAzTceuX3Z4MP
          claim_id: c_dsYaM7JtDv-mjF9kof6cj1
          source_id: s_aezRG3VnGWPt4X8ieiDCFT
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第二十六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_aezRG3VnGWPt4X8ieiDCFT
            source_type: api_record
            title: 中国历代人物传记资料库：王三聘（CBDB 204520）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204520&o=json
            external_identifier: CBDB:204520
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.828Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ACc1xBws7mA2Ao333iSn1t
        status: active
        display_name: 王三聘
        merged_into_person_id: null
  other: []
---

# 王景華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景華 | accepted |
| bio.summary | 王景華，明人物。嘉靖三十五年進士。（中国历代人物传记资料库 CBDB 320256） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_ACc1xBws7mA2Ao333iSn1t | 王三聘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景華（CBDB 320256）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320256&o=json)
- [中国历代人物传记资料库：王三聘（CBDB 204520）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204520&o=json)
