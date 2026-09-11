---
schema: wang-person/v1
id: p_vwLbLxeLcGQXy3LjnvgjUM
status: active
merged_into: null
display_name: 王仁裕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yxVggfAmuxh4ECUE4n7a31
        subject_person_id: p_vwLbLxeLcGQXy3LjnvgjUM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁裕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cUDCTfZtqQRPo6pqFrp4tz
          claim_id: c_yxVggfAmuxh4ECUE4n7a31
          source_id: s_S7NArFF51VL5Z8jLcCBaw8
          stance: supports
          locator: CBDB:635892
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635892）
          source: &a1
            id: s_S7NArFF51VL5Z8jLcCBaw8
            source_type: api_record
            title: 中国历代人物传记资料库：王仁裕（CBDB 635892）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635892&o=json
            external_identifier: CBDB:635892
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.052Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tVVEJVMuxMBwRfviMyrrW3
        subject_person_id: p_vwLbLxeLcGQXy3LjnvgjUM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁裕，清人物。籍贯邛州直隸州直轄地方，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 635892）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dmAcCITEYLIoQVg0XMULHL
          claim_id: c_tVVEJVMuxMBwRfviMyrrW3
          source_id: s_S7NArFF51VL5Z8jLcCBaw8
          stance: supports
          locator: CBDB:635892
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

# 王仁裕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仁裕 | accepted |
| bio.summary | 王仁裕，清人物。籍贯邛州直隸州直轄地方，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 635892） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仁裕（CBDB 635892）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635892&o=json)
