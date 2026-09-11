---
schema: wang-person/v1
id: p_8cxn7qhC9RcaoQ98GdxCBt
status: active
merged_into: null
display_name: 史氏
revision: 1
cbdb_id: 215868
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c__jRspgMaXlMWL_ckSf_TQ6
        subject_person_id: p_8cxn7qhC9RcaoQ98GdxCBt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 史氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oxpwGwLwUmpHoDxWZkIBDh
          claim_id: c__jRspgMaXlMWL_ckSf_TQ6
          source_id: s_jO2YNPSM6wvoRobLYVhJjT
          stance: supports
          locator: CBDB:215868
          quotation: null
          interpretation_note: CBDB 明确记录的王謙配偶
          source: &a1
            id: s_jO2YNPSM6wvoRobLYVhJjT
            source_type: api_record
            title: 中国历代人物传记资料库：史氏(王謙妻)（CBDB 215868）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215868&o=json
            external_identifier: CBDB:215868
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_fw12tkpDhDinMIl9-wix2f
        subject_person_id: p_68bfPNUHA98KKMwPnJ12C3
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_8cxn7qhC9RcaoQ98GdxCBt
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gpr3q--43KQkJIGyc_c38Y
          claim_id: c_fw12tkpDhDinMIl9-wix2f
          source_id: s_jO2YNPSM6wvoRobLYVhJjT
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第二甲第三十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_68bfPNUHA98KKMwPnJ12C3
        status: active
        display_name: 王謙
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 史氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 史氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_68bfPNUHA98KKMwPnJ12C3 | 王謙 | accepted |

## 外部来源

- [中国历代人物传记资料库：史氏(王謙妻)（CBDB 215868）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215868&o=json)
