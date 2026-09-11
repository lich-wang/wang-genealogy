---
schema: wang-person/v1
id: p_oRkfEh3mM8juLYCKZ1pfmA
status: active
merged_into: null
display_name: 王伯忠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oJPZF8CpYw62VMyCyQ3vPW
        subject_person_id: p_oRkfEh3mM8juLYCKZ1pfmA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4845cRP3Q3ow45j31PA6By
          claim_id: c_oJPZF8CpYw62VMyCyQ3vPW
          source_id: s_UBXV3HnYCDUoAR5HmgUA2S
          stance: supports
          locator: CBDB:263441
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（263441）
          source: &a1
            id: s_UBXV3HnYCDUoAR5HmgUA2S
            source_type: api_record
            title: 中国历代人物传记资料库：王伯忠（CBDB 263441）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263441&o=json
            external_identifier: CBDB:263441
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.620Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q3HsNDDyVkXGyBkzVApuFM
        subject_person_id: p_oRkfEh3mM8juLYCKZ1pfmA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯忠，明人物。弘治三年進士。（中国历代人物传记资料库 CBDB 263441）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wezJSxHUhjc711QB0Lnmq6
          claim_id: c_q3HsNDDyVkXGyBkzVApuFM
          source_id: s_UBXV3HnYCDUoAR5HmgUA2S
          stance: supports
          locator: CBDB:263441
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
        id: c_S2OA1sflG00Uky6BXe0wLN
        subject_person_id: p_oRkfEh3mM8juLYCKZ1pfmA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PzCR5khH48dxkyKzDoAsiq
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rqD-N9KW5AzdzlkuL0Grfo
          claim_id: c_S2OA1sflG00Uky6BXe0wLN
          source_id: s_UBXV3HnYCDUoAR5HmgUA2S
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第一百七十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PzCR5khH48dxkyKzDoAsiq
        status: active
        display_name: 王瓚
        merged_into_person_id: null
  other: []
---

# 王伯忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伯忠 | accepted |
| bio.summary | 王伯忠，明人物。弘治三年進士。（中国历代人物传记资料库 CBDB 263441） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_PzCR5khH48dxkyKzDoAsiq | 王瓚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伯忠（CBDB 263441）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263441&o=json)
