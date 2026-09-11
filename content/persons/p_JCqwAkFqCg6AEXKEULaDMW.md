---
schema: wang-person/v1
id: p_JCqwAkFqCg6AEXKEULaDMW
status: active
merged_into: null
display_name: 王淵
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8xcZXYRztn5wmPrG1qrxcg
        subject_person_id: p_JCqwAkFqCg6AEXKEULaDMW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_i6g1TujnvgFW8R7aCxKZF8
          claim_id: c_8xcZXYRztn5wmPrG1qrxcg
          source_id: s_3nScnB9r5mRQFv6y1VT1PM
          stance: supports
          locator: CBDB:67719
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67719）
          source: &a1
            id: s_3nScnB9r5mRQFv6y1VT1PM
            source_type: api_record
            title: 中国历代人物传记资料库：王淵（CBDB 67719）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67719&o=json
            external_identifier: CBDB:67719
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.005Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RCE3rY4jP9FL8a1Q1w6QG1
        subject_person_id: p_JCqwAkFqCg6AEXKEULaDMW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_STWaY68u1yJBCV1soP7LFV
          claim_id: c_RCE3rY4jP9FL8a1Q1w6QG1
          source_id: s_3nScnB9r5mRQFv6y1VT1PM
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_aU5k1l9RcY-TYrnLnSCoDJ
        subject_person_id: p_t7N3FS2FJZpX5ZRC4cp82b
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JCqwAkFqCg6AEXKEULaDMW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AkmvWiOlpIHaukjaN5dkxh
          claim_id: c_aU5k1l9RcY-TYrnLnSCoDJ
          source_id: s_3nScnB9r5mRQFv6y1VT1PM
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第七十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_t7N3FS2FJZpX5ZRC4cp82b
        status: active
        display_name: 王鑰
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_WajRAWMcqtvcUSRHcKavx4
        subject_person_id: p_JCqwAkFqCg6AEXKEULaDMW
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_PqFoHm5tWPGhTeAAgMS2qW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9i_afC_n5fXsmVRs1EXjLX
          claim_id: c_WajRAWMcqtvcUSRHcKavx4
          source_id: s_wmVXleo7z961kaap--7CjA
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第七十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_wmVXleo7z961kaap--7CjA
            source_type: api_record
            title: 中国历代人物传记资料库：謝氏(王淵妻)（CBDB 297846）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297846&o=json
            external_identifier: CBDB:297846
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_PqFoHm5tWPGhTeAAgMS2qW
        status: active
        display_name: 謝氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_CTnwwlXWsrraKZRrsY5rdS
        subject_person_id: p_zSQK1S5NosJ33vAy5jFH9t
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_JCqwAkFqCg6AEXKEULaDMW
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n0yHu4JsjD1QNwZZm4nh0Q
          claim_id: c_CTnwwlXWsrraKZRrsY5rdS
          source_id: s_3nScnB9r5mRQFv6y1VT1PM
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第七十一名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zSQK1S5NosJ33vAy5jFH9t
        status: active
        display_name: 王用中
        merged_into_person_id: null
    - claim:
        id: c__Ski6yitRLiKFcXy_85ZSU
        subject_person_id: p_x8Pfh3mEu2L8yisF1Zzp6B
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_JCqwAkFqCg6AEXKEULaDMW
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F7K13-pYYoNnT7EOS-u7TA
          claim_id: c__Ski6yitRLiKFcXy_85ZSU
          source_id: s_3nScnB9r5mRQFv6y1VT1PM
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第七十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_x8Pfh3mEu2L8yisF1Zzp6B
        status: active
        display_name: 王孟寧
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王淵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淵 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_t7N3FS2FJZpX5ZRC4cp82b | 王鑰 | accepted |
| spouses | p_PqFoHm5tWPGhTeAAgMS2qW | 謝氏 | accepted |
| ancestors | p_zSQK1S5NosJ33vAy5jFH9t | 王用中 | accepted |
| ancestors | p_x8Pfh3mEu2L8yisF1Zzp6B | 王孟寧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王淵（CBDB 67719）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67719&o=json)
- [中国历代人物传记资料库：謝氏(王淵妻)（CBDB 297846）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297846&o=json)
