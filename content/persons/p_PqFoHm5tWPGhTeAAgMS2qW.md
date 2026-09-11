---
schema: wang-person/v1
id: p_PqFoHm5tWPGhTeAAgMS2qW
status: active
merged_into: null
display_name: 謝氏
revision: 1
cbdb_id: 297846
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ErtvfePeMiyiKe_DNzLjyG
        subject_person_id: p_PqFoHm5tWPGhTeAAgMS2qW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 謝氏，明人物。天順元年進士。（中国历代人物传记资料库 CBDB 297846）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H9wFCNu4muikerX9OTPL1n
          claim_id: c_ErtvfePeMiyiKe_DNzLjyG
          source_id: s_wmVXleo7z961kaap--7CjA
          stance: supports
          locator: CBDB:297846
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_07uQcK48khu_GriA4MqnMb
        subject_person_id: p_PqFoHm5tWPGhTeAAgMS2qW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 謝氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_buDHPtmtElTs2s92AHkkhn
          claim_id: c_07uQcK48khu_GriA4MqnMb
          source_id: s_wmVXleo7z961kaap--7CjA
          stance: supports
          locator: CBDB:297846
          quotation: null
          interpretation_note: CBDB 明确记录的王淵配偶
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
          source: *a1
      object_person:
        id: p_JCqwAkFqCg6AEXKEULaDMW
        status: active
        display_name: 王淵
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 謝氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 謝氏，明人物。天順元年進士。（中国历代人物传记资料库 CBDB 297846） | accepted |
| name.primary | 謝氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_JCqwAkFqCg6AEXKEULaDMW | 王淵 | accepted |

## 外部来源

- [中国历代人物传记资料库：謝氏(王淵妻)（CBDB 297846）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297846&o=json)
