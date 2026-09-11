---
schema: wang-person/v1
id: p_rR2Vb83Q6ZaGGSTqc9JxCb
status: active
merged_into: null
display_name: 王軻
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L4o4qiHDN2LzGBHHHftpst
        subject_person_id: p_rR2Vb83Q6ZaGGSTqc9JxCb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王軻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gqfxnXr7rtVFYhcGo9GNAn
          claim_id: c_L4o4qiHDN2LzGBHHHftpst
          source_id: s_3uPMiQfLMzWUXAExJU6DC9
          stance: supports
          locator: CBDB:224180
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（224180）
          source: &a1
            id: s_3uPMiQfLMzWUXAExJU6DC9
            source_type: api_record
            title: 中国历代人物传记资料库：王軻（CBDB 224180）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224180&o=json
            external_identifier: CBDB:224180
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.429Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Y7VMNGdQvX2noxWty6LFBX
        subject_person_id: p_rR2Vb83Q6ZaGGSTqc9JxCb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王軻，明人物。萬曆十一年進士，曾任壽官。（中国历代人物传记资料库 CBDB 224180）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Rmu-Ds6vtajQc1dMLwKJY0
          claim_id: c_Y7VMNGdQvX2noxWty6LFBX
          source_id: s_3uPMiQfLMzWUXAExJU6DC9
          stance: supports
          locator: CBDB:224180
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
        id: c_PvE-jx5EMMVvBj5eLXb__b
        subject_person_id: p_rR2Vb83Q6ZaGGSTqc9JxCb
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_peUehXHPLMte3L7YPhiTwo
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kVDxecQyeDR0K9nKrCDN5y
          claim_id: c_PvE-jx5EMMVvBj5eLXb__b
          source_id: s_3uPMiQfLMzWUXAExJU6DC9
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第三甲第一百二十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_peUehXHPLMte3L7YPhiTwo
        status: active
        display_name: 王夢鯉
        merged_into_person_id: null
  other: []
---

# 王軻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王軻 | accepted |
| bio.summary | 王軻，明人物。萬曆十一年進士，曾任壽官。（中国历代人物传记资料库 CBDB 224180） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_peUehXHPLMte3L7YPhiTwo | 王夢鯉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王軻（CBDB 224180）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224180&o=json)
