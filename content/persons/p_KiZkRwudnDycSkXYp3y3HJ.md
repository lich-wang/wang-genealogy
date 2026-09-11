---
schema: wang-person/v1
id: p_KiZkRwudnDycSkXYp3y3HJ
status: active
merged_into: null
display_name: 王彩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4Cz5KRbBh1WK444rrHsLQQ
        subject_person_id: p_KiZkRwudnDycSkXYp3y3HJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3M5GSrhRHdhcY1AmHidXjT
          claim_id: c_4Cz5KRbBh1WK444rrHsLQQ
          source_id: s_FYAuHE195HVAMPheHTHYHx
          stance: supports
          locator: CBDB:491452
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（491452）
          source: &a1
            id: s_FYAuHE195HVAMPheHTHYHx
            source_type: api_record
            title: 中国历代人物传记资料库：王彩（CBDB 491452）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=491452&o=json
            external_identifier: CBDB:491452
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.189Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sYPae5bZbuv4pvEEeY1xRd
        subject_person_id: p_KiZkRwudnDycSkXYp3y3HJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彩，明人物。曾任訓術。（中国历代人物传记资料库 CBDB 491452）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_G8-16MZ6v4c76Ck3iNoPvj
          claim_id: c_sYPae5bZbuv4pvEEeY1xRd
          source_id: s_FYAuHE195HVAMPheHTHYHx
          stance: supports
          locator: CBDB:491452
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
  descendants: []
  other: []
---

# 王彩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彩 | accepted |
| bio.summary | 王彩，明人物。曾任訓術。（中国历代人物传记资料库 CBDB 491452） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彩（CBDB 491452）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=491452&o=json)
