---
schema: wang-person/v1
id: p_Bo5qQ9f85dqKZAxHwgr7RL
status: active
merged_into: null
display_name: 竇氏
revision: 1
cbdb_id: 270651
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aozykoN8Q0AOAy1iZFKv2c
        subject_person_id: p_Bo5qQ9f85dqKZAxHwgr7RL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 竇氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nACfFlaY16rHAmC_5BfULC
          claim_id: c_aozykoN8Q0AOAy1iZFKv2c
          source_id: s_GKv2XUvObbn3FHc3H5MSBp
          stance: supports
          locator: CBDB:270651
          quotation: null
          interpretation_note: CBDB 明确记录的王雲配偶
          source: &a1
            id: s_GKv2XUvObbn3FHc3H5MSBp
            source_type: api_record
            title: 中国历代人物传记资料库：竇氏(王雲妻)（CBDB 270651）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270651&o=json
            external_identifier: CBDB:270651
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
        id: c_RgfQjfj4Ako1r9VMqd0f3v
        subject_person_id: p_kuyuiJHgUznyGsvyFU7zw8
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Bo5qQ9f85dqKZAxHwgr7RL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yS_B7QPoZ86DtmCX2mwr9k
          claim_id: c_RgfQjfj4Ako1r9VMqd0f3v
          source_id: s_GKv2XUvObbn3FHc3H5MSBp
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第八十八名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kuyuiJHgUznyGsvyFU7zw8
        status: active
        display_name: 王雲
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 竇氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 竇氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_kuyuiJHgUznyGsvyFU7zw8 | 王雲 | accepted |

## 外部来源

- [中国历代人物传记资料库：竇氏(王雲妻)（CBDB 270651）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270651&o=json)
