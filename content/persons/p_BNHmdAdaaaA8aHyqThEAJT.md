---
schema: wang-person/v1
id: p_BNHmdAdaaaA8aHyqThEAJT
status: active
merged_into: null
display_name: 許氏
revision: 1
cbdb_id: 335480
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jxBR3b54BwSCfCzfpo-L_X
        subject_person_id: p_BNHmdAdaaaA8aHyqThEAJT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 許氏，明人物。隆慶二年進士。（中国历代人物传记资料库 CBDB 335480）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_paKLWC-GKz3auU6WtYowAI
          claim_id: c_jxBR3b54BwSCfCzfpo-L_X
          source_id: s_P4FH-W09KCOniSfvMQCxqa
          stance: supports
          locator: CBDB:335480
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_P4FH-W09KCOniSfvMQCxqa
            source_type: api_record
            title: 中国历代人物传记资料库：許氏(王用汲妻)（CBDB 335480）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335480&o=json
            external_identifier: CBDB:335480
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_pID6YcRXetMW7tcBJ8v41u
        subject_person_id: p_BNHmdAdaaaA8aHyqThEAJT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 許氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JmpZ0iGJ8dADvEIsqVuBwA
          claim_id: c_pID6YcRXetMW7tcBJ8v41u
          source_id: s_P4FH-W09KCOniSfvMQCxqa
          stance: supports
          locator: CBDB:335480
          quotation: null
          interpretation_note: CBDB 明确记录的王用汲配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_HEIMWH74PP20UqCzpJTPXf
        subject_person_id: p_BzK6A2uXvZyrjjgruuh1Qh
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_BNHmdAdaaaA8aHyqThEAJT
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O7F5VZ63_th3rpwdYHwQxU
          claim_id: c_HEIMWH74PP20UqCzpJTPXf
          source_id: s_P4FH-W09KCOniSfvMQCxqa
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百零四名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BzK6A2uXvZyrjjgruuh1Qh
        status: active
        display_name: 王用汲
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 許氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 許氏，明人物。隆慶二年進士。（中国历代人物传记资料库 CBDB 335480） | accepted |
| name.primary | 許氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_BzK6A2uXvZyrjjgruuh1Qh | 王用汲 | accepted |

## 外部来源

- [中国历代人物传记资料库：許氏(王用汲妻)（CBDB 335480）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335480&o=json)
